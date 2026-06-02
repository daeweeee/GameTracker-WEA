import Header from "@/components/header";
import NameLogo from "@/components/namelogo";
import Navbar from "@/components/navbar";
import Stats from "@/components/stats";
import Status from "@/components/status";

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
    </div>
  );
}
