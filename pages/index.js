import Head from "next/head";
import InfoSection from "../components/UI/Header/InfoHeader";
import JokeWall from "../components/UI/Tables/JokeWall";

export default function Home() {
  return (
    <>
      <InfoSection />
      <JokeWall />
    </>
  );
}
