import Header from "@/app/components/header";
import ChatSection from "./components/chat-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 bg-slate-300 dark:bg-slate-950">
      <Header />
      <ChatSection />
    </main>
  );
}
