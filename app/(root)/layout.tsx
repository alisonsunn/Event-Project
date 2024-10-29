import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col">
      <Header></Header>
      <main className="flex flex-col">
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
