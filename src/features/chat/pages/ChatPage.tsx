import { Input } from "~/components/ui/input";
import Header from "../_components/Header";
import { Button } from "~/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight } from "@hugeicons/core-free-icons";

const ChatPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 items-center justify-center p-4">
          <div className="w-full max-w-2xl rounded-lg text-center">
            <h2 className="text-2xl font-bold">Welcome to Dent Assist!</h2>
            <p className="text-muted-foreground mt-2">
              Start a new chat to get dental assistance.
            </p>
            <div className="group relative mt-6 flex items-center">
              <Input className="h-12" placeholder="Type your message..." />
              <Button variant="default" size="lg" className="absolute right-1">
                <HugeiconsIcon icon={ArrowRight} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
