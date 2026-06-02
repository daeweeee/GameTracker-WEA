import Header from "@/components/header";
import NameLogo from "@/components/namelogo";
import Navbar from "@/components/navbar";
import Stats from "@/components/stats";
import Status from "@/components/status";
import AktHraneDiv from "@/components/akthranediv";
import AktHranaHra from "@/components/akthranahra";

export default function Home() {
  return (
    <div>
      <Header>
        <NameLogo>

        </NameLogo>
        <Navbar>

        </Navbar>
      </Header>
      <Stats>
        <Status
          name="TOTAL LIBRARY"
          value="248"
        />
        <Status
          name="COMPLETION RATE"
          value="64"
        />
        <Status
          name="HOURS LOGGED"
          value="1240"
        />
        <Status
          name="WISHED"
          value="12"
        />
      </Stats>
      <div>
        // -- Zde udělat tu tečku divnou idk --
        <h2>CURRENTLY PLAYING</h2>
      </div>
      
      <AktHraneDiv>
        <AktHranaHra
          obrazek=""
          obrazekAlt=""
          platforma="PC / Steam"
          nazev="Cyber Nexus 2077"
          coDelam="Procházím neonové ulice rozpadající se digitální utopie. Level 42 Netrunner build."
          progress={75}
        />
        <AktHranaHra
          obrazek=""
          obrazekAlt=""
          platforma="PlayStation 5"
          nazev="Eldritch Echoes"
          coDelam="Právě jsem dorazil k Forbidden Archive. Boss fight je tvrdý, atmosféra neuvěřitelná."
          progress={20}
        />
      </AktHraneDiv>
    </div>
  );
}
