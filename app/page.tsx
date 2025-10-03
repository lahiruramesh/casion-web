import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Casion Web App</h1>
      <p>Your one-stop solution for all casino-related information.</p>
      <Image
        src="/images/casino.jpg"
        alt="Casino"
        width={500}
        height={300}
      />
    </div>
  );
}
