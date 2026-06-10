import Header from "@/components/header";
import Name from "@/components/name";
import Navbar from "@/components/navbar";
import Stats from "@/components/stats";
import Status from "@/components/status";
import AktHraneDiv from "@/components/akthranediv";
import AktHranaHra from "@/components/akthranahra";
import Hra from "@/components/hra";
import Knihovna from "@/components/knihovna";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <div className="m-5">
      <Header>
        <Name>
        </Name>
        <Navbar>
        </Navbar>
        [[Sem ten růžovomodrý gradient]]
      </Header>
      <Stats>
        <Status
          name="TOTAL LIBRARY"
          value= {248}
          color="white"
        />
        <Status
          name="COMPLETION RATE"
          value= {64}
          color="cyan"
          unit="%"
        />
        <Status
          name="HOURS LOGGED"
          value= {1240}
          color="white"
        />
        <Status
          name="WISHLISTED"
          value= {12}
          color="darkviolet"
        />
      </Stats>
      <div className="flex">
        [[Udělat tady pulsující tečku]]
        <h2 className="font-bold">CURRENTLY PLAYING</h2>
      </div>
      
      <AktHraneDiv>
        <AktHranaHra
          obrazek="/akt_hrane_1.jpg"
          platforma="PC / Steam"
          nazev="Cyber Nexus 2077"
          coDelam="Procházím neonové ulice rozpadající se digitální utopie. Level 42 Netrunner build."
          progress={75}
          color="cyan" // Modrá
        />
        <AktHranaHra
          obrazek="/akt_hrane_2.jpg"
          platforma="PlayStation 5"
          nazev="Eldritch Echoes"
          coDelam="Právě jsem dorazil k Forbidden Archive. Boss fight je tvrdý, atmosféra neuvěřitelná."
          progress={20}
          color="darkviolet" // Fialová
        />
      </AktHraneDiv>

      <div className="flex">
        <h2 className="mb-5 font-bold">LIBRARY ARCHIVE</h2>
        <a href="" className="ml-auto text-xs font-bold text-gray-400">VIEW ALL COLLECTION →</a>
      </div>
      <Knihovna>
        <Hra
          hodnoceni={9.5}
          obrazek="/hra_1.jpg"
          obrazekAlt="Void Walker cover"
          nazev="Void Walker"
          stav="FINISHED"
          platforma="PC"
          color="cyan"
        />
        <Hra
          hodnoceni={8.0}
          obrazek="/hra_2.jpg"
          obrazekAlt="Logic Gates cover"
          nazev="Logic Gates"
          stav="BACKLOG"
          platforma="SWITCH"
          color="white"
        />
        <Hra
          hodnoceni={7.2}
          obrazek="/hra_3.jpg"
          obrazekAlt="Apex Drift cover"
          nazev="Apex Drift"
          stav="DROPPED"
          platforma="PS5"
          color="darkviolet"
        />
        <Hra
          hodnoceni={10}
          obrazek="/hra_4.jpg"
          obrazekAlt="Neon Mantis cover"
          nazev="Neon Mantis"
          stav="FINISHED"
          platforma="SWITCH"
          color="cyan"
        />
        <Hra
          hodnoceni={9.0}
          obrazek="/hra_5.jpg"
          obrazekAlt="Ashen Soul cover"
          nazev="Ashen Soul"
          stav="WISHLIST"
          platforma="PC"
          color="white"
        />
      </Knihovna>
        <hr />
      <p>
        <br/>TODO:<br/>
        - udělat CSS<br/>
        - udělat některé věci méně "prasácky"<br/>
        - vyřešit responzivitu?<br/>
        - dát obsah CURRENTLY PLAYING do gridu, aby to nedělalo... věci<br/>
      </p>
      
    </div>
  );
}
