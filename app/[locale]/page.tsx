import TemperatureBg from '../components/ServerSideRender/TemperatureBg'
import Header from '../components/ServerSideRender/Header'
import TwoBlocks from '../components/ClientSideRender/TwoBlocks'
import LazyLoadPic from '../components/ServerSideRender/LazyLoadPic'

import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
      <Header Part1={t("header.part1")} Part2={t("header.part2")} Part3={t("header.part3")} ParagHeader={t("header.paragraphHeader")} Lang1={t("ChangeLang.eng")} Lang2={t("ChangeLang.pol")}/>
      <TemperatureBg TempAirCond={t("TemperatureBg.TempAirCond")} TempAutoCooling={t("TemperatureBg.TempAutoCooling")}/>
      <TwoBlocks Part1SSR={t("SSR.part1")} Part2SSR={t("SSR.part2")} Part3SSR={t("SSR.part3")} Part4SSR={t("SSR.part4")} Part1CSR={t("CSR.part1")} Part2CSR={t("CSR.part2")} Part3CSR={t("CSR.part3")}/>
      <LazyLoadPic />
    </>
  )
}
