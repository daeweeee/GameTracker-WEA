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
        -- Sem ten růžovomodrý gradient --
      </Header>
      <Stats>
        <Status
          name="TOTAL LIBRARY"
          value="248"
          color=""
        />
        <Status
          name="COMPLETION RATE"
          value="64"
          color=""
        />
        <Status
          name="HOURS LOGGED"
          value="1240"
          color=""
        />
        <Status
          name="WISHED"
          value="12"
          color=""
        />
      </Stats>
      <div>
        -- Udělat gradient tečku nalevo od CURRENTLY PLAYING --
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
          barva="" // Modra
        />
        <AktHranaHra
          obrazek=""
          obrazekAlt=""
          platforma="PlayStation 5"
          nazev="Eldritch Echoes"
          coDelam="Právě jsem dorazil k Forbidden Archive. Boss fight je tvrdý, atmosféra neuvěřitelná."
          progress={20}
          barva="" // Fialova
        />
      </AktHraneDiv>

      <div className="flex">
        <h2 className="mb-5">LIBRARY ARCHIVE</h2>
        <a href="" className="ml-auto">VIEW ALL COLLECTION</a>
      </div>
      <Knihovna>
        <Hra
          hodnoceni={9.5}
          obrazek=""
          obrazekAlt=""
          nazev="Void Walker"
          stav="FINISHED"
          platforma="PC"
        />
        <Hra
          hodnoceni={8.0}
          obrazek=""
          obrazekAlt=""
          nazev="Logic Gates"
          stav="BACKLOG"
          platforma="SWITCH"
        />
        <Hra
          hodnoceni={7.2}
          obrazek=""
          obrazekAlt=""
          nazev="Apex Drift"
          stav="DROPPED"
          platforma="PS5"
        />
        <Hra
          hodnoceni={10}
          obrazek=""
          obrazekAlt=""
          nazev="Neon Mantis"
          stav="FINISHED"
          platforma="SWITCH"
        />
        <Hra
          hodnoceni={9.0}
          obrazek=""
          obrazekAlt=""
          nazev="Ashen Soul"
          stav="WISHLIST"
          platforma="PC"
        />
      </Knihovna>
        <hr />
      <p>
        <br/>TODO:<br/>
        - udělat procenta, aniž by hodnota dokončení musela být string<br/>
        - udělat CSS<br/>
        - udělat některé věci méně "prasácky"<br/>
        - roztáhnout ty divy přes celou sířku stránky
      </p>
      
    </div>
  );
}
