"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "~/components/ui/input";
import Header from "../_components/Header";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight, MessageSquare, Sparkles } from "@hugeicons/core-free-icons";

interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();

      // Add assistant response to chat
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message || data.response || "Unable to get response",
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: "Sorry, there was an error processing your request.",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <Header />
      <div className="bg-background flex h-full flex-1 flex-col">
        {messages.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center p-4">
            <div className="animate-in fade-in slide-in-from-bottom-8 w-full max-w-2xl text-center duration-700">
              <div className="bg-primary/10 text-primary mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
                <HugeiconsIcon icon={MessageSquare} size={32} />
              </div>
              <h2 className="from-foreground to-foreground/70 bg-linear-to-br bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                Welcome to Dent Assist!
              </h2>
              <p className="text-muted-foreground mx-auto mt-4 max-w-md text-lg leading-relaxed">
                Your AI-powered dental health companion. Ready to help with your
                questions.
              </p>
              <div className="bg-muted/50 border-border mt-8 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-medium transition-all hover:bg-muted">
                <HugeiconsIcon icon={Sparkles} size={16} className="text-primary" />
                <span className="text-muted-foreground">
                  Start a new chat to get dental assistance.
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-lg rounded-xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm shadow-md"
                      : "bg-muted text-muted-foreground border-border rounded-bl-sm border"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground border-border rounded-xl rounded-bl-sm border px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full"></div>
                    <div className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full delay-100"></div>
                    <div className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        <div className="from-background/0 via-background/60 to-background sticky bottom-0 z-10 p-4 pb-8 pt-12 bg-linear-to-t">
          <div className="mx-auto flex w-full max-w-4xl items-center gap-3">
            <div className="border-border bg-card/80 relative flex flex-1 items-center gap-2 rounded-2xl border p-2 shadow-2xl backdrop-blur-xl transition-all focus-within:ring-2 focus-within:ring-primary/30">
              <Input
                className="border-none bg-transparent h-12 pr-4 pl-4 shadow-none focus-visible:ring-0 text-base"
                placeholder="Start a new chat to get dental assistance..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
              <Button
                variant="default"
                size="icon"
                className="h-10 w-10 shrink-0 rounded-xl shadow-lg transition-all hover:scale-105 active:scale-95"
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
              >
                <HugeiconsIcon icon={ArrowRight} size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
