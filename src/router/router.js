import Vue from 'vue'
import VueRouter from "vue-router"
import OdakBloodGroupingGelSystems from '../components/products/odakBloodGroupingGelSystemsPages/odakBloodGroupingGelSystems'
import ObgForwardGroup1 from '../components/products/odakBloodGroupingGelSystemsPages/OBGForwardGroup1'
import ObgForwardGroup2 from '../components/products/odakBloodGroupingGelSystemsPages/OBGForwardGroup2'
import ObgForwardGroup3 from '../components/products/odakBloodGroupingGelSystemsPages/OBGForwardGroup3'
import ObgForwardAndReverseGrouping from '../components/products/odakBloodGroupingGelSystemsPages/OBGForwardAndReverseGrouping'
import ObgNeonatalGrouping from '../components/products/odakBloodGroupingGelSystemsPages/OBGNeonatalGrouping'
import ObgCompTest from '../components/products/odakBloodGroupingGelSystemsPages/OBGCompTest'
import ObgRhPhenotype from '../components/products/odakBloodGroupingGelSystemsPages/OBGRhPhenotype'
import ObgaSubgroup from '../components/products/odakBloodGroupingGelSystemsPages/OBGASubgroup'
import ObgNeutralGel from '../components/products/odakBloodGroupingGelSystemsPages/OBGNeutralGel'
import ObgNeutralAhgGel from '../components/products/odakBloodGroupingGelSystemsPages/OBGNeutralAHGGel'
import ObgAhgGel from '../components/products/odakBloodGroupingGelSystemsPages/OBGAHGGel'
import ObgDatScreen from '../components/products/odakBloodGroupingGelSystemsPages/OBGDATScreen'
import ODAKBloodGroupingSystemsDilüentVeSolüsyonlar from '../components/products/ODAKBloodGroupingSystemsDilüentVeSolüsyonlarPages/ODAKBloodGroupingSystemsDilüentVeSolüsyonlar'
import ObgBromelinSolusyonu from '../components/products/ODAKBloodGroupingSystemsDilüentVeSolüsyonlarPages/OBGBromelinSolusyonu'
import ObgLissDiluent from '../components/products/ODAKBloodGroupingSystemsDilüentVeSolüsyonlarPages/OBGLISSDiluent'
import ObgPapainSolusyonu from '../components/products/ODAKBloodGroupingSystemsDilüentVeSolüsyonlarPages/OBGPapainSolusyonu'
import WeakAntiD from '../components/products/ODAKBloodGroupingSystemsDilüentVeSolüsyonlarPages/WeakAnti-D'
import ODAKBloodReagentSlaytTupTestler from '../components/products/ODAKBloodReagentSlaytTupTestlerPages/ODAKBloodReagentSlaytTupTestler'
import ObgAntiA from '../components/products/ODAKBloodReagentSlaytTupTestlerPages/ObgAntiA'
import ObgAntiB from '../components/products/ODAKBloodReagentSlaytTupTestlerPages/ObgAntiB'
import ObgAntiD from '../components/products/ODAKBloodReagentSlaytTupTestlerPages/ObgAntiD'
import ODAKBloodGroupingRedBloodCells from '../components/products/ODAKBloodGroupingRedBloodCellsPages/ODAKBloodGroupingRedBloodCells'
import OBGCellReverseA1_B from '../components/products/ODAKBloodGroupingRedBloodCellsPages/OBGCellReverse-A1-B'
import OBGCellReverseA1_A2_B_O from '../components/products/ODAKBloodGroupingRedBloodCellsPages/OBGCellReverseA1-A2-B-O'
import ODAKBloodGroupingRedBloodCellsAntikor from '../components/products/ODAKBloodGroupingRedBloodCellsAntikorPages/ODAKBloodGroupingRedBloodCellsAntikor'
import IcKaliteGrupSerumKontrol from '../components/products/ODAKBloodGroupingRedBloodCellsAntikorPages/IcKaliteGrupSerumKontrol'
import IcKaliteKontrol from '../components/products/ODAKBloodGroupingRedBloodCellsAntikorPages/IcKaliteGrupSerumKontrol'
import OBGCellCoombsControl from '../components/products/ODAKBloodGroupingRedBloodCellsAntikorPages/OBGCellCoombsControl'
import OBGCellScreen_1_2 from '../components/products/ODAKBloodGroupingRedBloodCellsAntikorPages/OBGCellScreen-1-2'
import OBGCellScreen_1_2_3 from '../components/products/ODAKBloodGroupingRedBloodCellsAntikorPages/OBGCellScreen-1-2-3'
import OBGCellScreen_1_2_Pap from '../components/products/ODAKBloodGroupingRedBloodCellsAntikorPages/OBGCellScreen-1-2-Pap'
import OBGCellScreen_1_2_3_Pap from '../components/products/ODAKBloodGroupingRedBloodCellsAntikorPages/OBGCellScreen-1-2-3-Pap'
import OBGlgGSensitizedRedCells from '../components/products/ODAKBloodGroupingRedBloodCellsAntikorPages/OBGlgGSensitizedRedCells'
import ManuelSistem from '../components/products/ManuelSistemPages/ManuelSistem'
import JelKartiInkubator from '../components/products/ManuelSistemPages/JelKartiInkubator'
import JelKartSantrifuj from '../components/products/ManuelSistemPages/JelKartiSantrifuj'
import JelKartOkuyucu from '../components/products/ManuelSistemPages/JelKartOkuyucu'
import KartOkuyucuYazilim from '../components/products/ManuelSistemPages/KartOkuyucuYazilim'
import HomePage from '../components/homepage/HomePage'
import Contact from '../components/contact/Contact'
import Reference from '../components/reference/Reference'
import AboutUs from "../components/aboutUs/AboutUs";




Vue.use(VueRouter);

const routes=[

    {path:"/odakBloodGrouping" ,component:OdakBloodGroupingGelSystems},
    {path:"/obg-forward-group1", component:ObgForwardGroup1},
    {path:"/obg-forward-group2", component:ObgForwardGroup2},
    {path:"/obg-forward-group3", component:ObgForwardGroup3},
    {path:"/obg-forward-and-reverse-grouping",component:ObgForwardAndReverseGrouping},
    {path:"/obg-neonatal-grouping",component:ObgNeonatalGrouping},
    {path:"/obg-comp-test",component:ObgCompTest},
    {path:"/obg-rh-phenotype",component:ObgRhPhenotype},
    {path:"/obg-neutral-gel",component:ObgNeutralGel},
    {path:"/obg-neutral-ahg-gel",component:ObgNeutralAhgGel},
    {path:"/obg-ahg-gel",component:ObgAhgGel},
    {path:"/obg-dat-screen",component:ObgDatScreen},
    {path:"/obga-subgroup",component:ObgaSubgroup},
    {path:"/odak-blood-grouping-systems-diluent-ve-solusyonlar",component:ODAKBloodGroupingSystemsDilüentVeSolüsyonlar},
    {path:"/obg-bromelin-solusyonu",component:ObgBromelinSolusyonu},
    {path:"/obg-liss-diluent",component:ObgLissDiluent},
    {path:"/obg-papain-solusyonu",component:ObgPapainSolusyonu},
    {path:"/weak-anti-d",component:WeakAntiD},
    {path:"/odak-blood-reagent-slayt-tup-testler",component:ODAKBloodReagentSlaytTupTestler},
    {path:"/obg-anti-a",component:ObgAntiA},
    {path:"/obg-anti-b",component:ObgAntiB},
    {path:"/obg-anti-d",component:ObgAntiD},
    {path:"/odak-blood-grouping-red-blood-cells",component:ODAKBloodGroupingRedBloodCells},
    {path:"/obg-cell-reverse-A1-B" ,component:OBGCellReverseA1_B},
    {path:"/obg-cell-reverse-A1-A2-B-O",component:OBGCellReverseA1_A2_B_O},
    {path:"/odak-blood-grouping-red-blood-cells-antikor",component:ODAKBloodGroupingRedBloodCellsAntikor},
    {path:"/ic-kalite-grup-serum-kontrol",component:IcKaliteGrupSerumKontrol},
    {path:"/ic-kalite-kontrol",component:IcKaliteKontrol},
    {path:"/obg-cell-coombs-control",component:OBGCellCoombsControl},
    {path:"/obg-cell-screen_1_2",component:OBGCellScreen_1_2},
    {path:"/obg-cell-screen_1_2_3",component:OBGCellScreen_1_2_3},
    {path:"/obg-cell-screen_1_2_pap",component:OBGCellScreen_1_2_Pap},
    {path:"/obg-cell-screen_1_2_3_pap",component:OBGCellScreen_1_2_3_Pap},
    {path:"/obg-lgg-sensitized-red-cells",component:OBGlgGSensitizedRedCells},
    {path:"/manuel-sistem" ,component:ManuelSistem},
    {path:"/jel-karti-inkubator",component:JelKartiInkubator},
    {path:"/jel-kart-santrifuj",component:JelKartSantrifuj},
    {path:"/jel-kart-okuyucu",component:JelKartOkuyucu},
    {path:"/kart-okuyucu-yazilim",component:KartOkuyucuYazilim},
    {path:"/home-page" , component:HomePage},
    {path:"/contact",component:Contact},
    {path:"/reference",component:Reference},
    {path:"/about-us",component:AboutUs},




];

export const router =  new VueRouter({
    mode:"history",
    routes
});
