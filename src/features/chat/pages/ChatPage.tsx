"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "~/components/ui/input";
import Header from "../_components/Header";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight } from "@hugeicons/core-free-icons";

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
          <div className="flex flex-1 items-center justify-center p-4">
            <div className="w-full max-w-2xl rounded-lg text-center">
              <h2 className="text-3xl font-semibold">
                Welcome to Dent Assist!
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Start a new chat to get dental assistance.
              </p>
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

        <div className="border-border bg-background border-t p-4">
          <div className="mx-auto flex w-full max-w-4xl items-center gap-3">
            <div className="relative flex-1">
              <Input
                className="border-border bg-card h-12 rounded-full pr-12 pl-5 shadow-sm transition-shadow focus:shadow-md"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
            </div>
            <Button
              variant="default"
              size="icon"
              className="h-12 w-12 rounded-full shadow-md"
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
            >
              <HugeiconsIcon icon={ArrowRight} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
