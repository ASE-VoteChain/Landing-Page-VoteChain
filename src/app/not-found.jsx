import Image from "next/image";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3EEE7] text-[#043553]">
      <Image
        src="/shield-check.png"
        alt="VoteChain Security Shield"
        width={100}
        height={100}
        priority
      />
      <p className="text-2xl mt-4 font-semibold">COMING SOON</p>
      <p className="text-md mt-2 text-gray-600">
        Esta sección aún no está disponible.
      </p>
    </div>
  );
}
