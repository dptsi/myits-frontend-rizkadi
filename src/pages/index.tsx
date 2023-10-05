import PageTransition from "@/components/PageLayout";
import ContainerQuery from "@/components/atoms/ContainerQuery";
import MenuWrap from "@/components/atoms/MenuWrap";
import PageRow from "@/components/atoms/PageRow";
import CardIconShadow from "@/components/organisms/CardIconShadow";
import PageBanner from "@/components/organisms/PageBanner";


const Beranda = () => {
  return (
    <>
<PageTransition>
        <PageRow>
          <ContainerQuery>
            <PageBanner></PageBanner>
            <MenuWrap>
              <CardIconShadow
                title="Cuti"
                subtitle="Kelola cuti anda"
                link="/cuti"
                icon="/images/icon/folderbf.svg"
              ></CardIconShadow>
              <CardIconShadow
                title="Rekap absen"
                subtitle="Kelola cuti anda"
                link="/cuti"
              ></CardIconShadow>
              <CardIconShadow
                title="Cuti"
                subtitle="Kelola cuti anda"
                link="/cuti"
              ></CardIconShadow>
            </MenuWrap>
          </ContainerQuery>
        </PageRow>
      </PageTransition>
    </>
  );
};

export default Beranda;
