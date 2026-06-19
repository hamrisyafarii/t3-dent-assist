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
      <div className="flex flex-1 flex-col h-full bg-background">
        {messages.length === 0 ? (
          <div className="flex flex-1 items-center justify-center p-4">
            <div className="w-full max-w-2xl rounded-lg text-center">
              <h2 className="text-3xl font-semibold">Welcome to Dent Assist!</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Start a new chat to get dental assistance.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-lg px-4 py-3 rounded-xl ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm shadow-md"
                      : "bg-muted text-muted-foreground border border-border rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-muted-foreground border border-border rounded-xl rounded-bl-sm px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}

        <div className="border-t border-border bg-background p-4">
          <div className="flex items-center w-full max-w-4xl mx-auto gap-3">
            <div className="flex-1 relative">
              <Input
                className="h-12 pr-12 rounded-full pl-5 border-border bg-card shadow-sm focus:shadow-md transition-shadow"
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
              className="rounded-full h-12 w-12 shadow-md"
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
