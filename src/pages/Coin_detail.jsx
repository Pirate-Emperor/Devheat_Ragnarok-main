import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import styles from "../style/coin_detail.module.css"
import { HiSparkles } from "react-icons/hi2";
import { useNavigate, Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { collection, query, where, doc, getDocs, addDoc, updateDoc, deleteDoc, serverTimestamp, FieldValue } from "firebase/firestore"
import { db } from "../firebase"
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);




function Coin_detail() {


    const navigate = useNavigate();
    const [data_, setdata_] = useState([])
    const [er, seter] = useState("")
    const [stock, setstock] = useState("")
    const [bal, setbal] = useState(sessionStorage.getItem("balance"))



    const onchange_2 = (event) => {
        setstock(event.target.value);
    }

    const ext = {
        "change": "-0.69",
        "history": [
            {
                "price": "16620.108100299152",
                "timestamp": 1668848400
            },
            {
                "price": "16637.880516605033",
                "timestamp": 1668848100
            },
            {
                "price": "16626.88018411642",
                "timestamp": 1668847800
            },
            {
                "price": "16610.596847858564",
                "timestamp": 1668847500
            },
            {
                "price": "16623.35142589819",
                "timestamp": 1668847200
            },
            {
                "price": "16609.570031303043",
                "timestamp": 1668846900
            },
            {
                "price": "16590.807905923186",
                "timestamp": 1668846600
            },
            {
                "price": "16600.510126196004",
                "timestamp": 1668846300
            },
            {
                "price": "16603.16474580577",
                "timestamp": 1668846000
            },
            {
                "price": "16609.280899085083",
                "timestamp": 1668845700
            },
            {
                "price": "16605.297639870612",
                "timestamp": 1668845400
            },
            {
                "price": "16613.458006845554",
                "timestamp": 1668845100
            },
            {
                "price": "16608.70833223741",
                "timestamp": 1668844800
            },
            {
                "price": "16605.986389236485",
                "timestamp": 1668844500
            },
            {
                "price": "16612.961949046767",
                "timestamp": 1668844200
            },
            {
                "price": "16610.155018862075",
                "timestamp": 1668843900
            },
            {
                "price": "16608.676085274456",
                "timestamp": 1668843600
            },
            {
                "price": "16608.88580259071",
                "timestamp": 1668843300
            },
            {
                "price": "16606.688510672928",
                "timestamp": 1668843000
            },
            {
                "price": "16609.82226214067",
                "timestamp": 1668842700
            },
            {
                "price": "16605.873792596485",
                "timestamp": 1668842400
            },
            {
                "price": "16610.931621218617",
                "timestamp": 1668842100
            },
            {
                "price": "16611.392012337707",
                "timestamp": 1668841800
            },
            {
                "price": "16604.37270068692",
                "timestamp": 1668841500
            },
            {
                "price": "16610.63633673645",
                "timestamp": 1668841200
            },
            {
                "price": "16605.906929822417",
                "timestamp": 1668840900
            },
            {
                "price": "16608.965643850886",
                "timestamp": 1668840600
            },
            {
                "price": "16603.37858679827",
                "timestamp": 1668840300
            },
            {
                "price": "16612.725488520926",
                "timestamp": 1668840000
            },
            {
                "price": "16591.303209711008",
                "timestamp": 1668839700
            },
            {
                "price": "16609.772488238148",
                "timestamp": 1668839400
            },
            {
                "price": "16616.97147486259",
                "timestamp": 1668839100
            },
            {
                "price": "16612.11882847656",
                "timestamp": 1668838800
            },
            {
                "price": "16595.11804323791",
                "timestamp": 1668838500
            },
            {
                "price": "16594.33005586883",
                "timestamp": 1668838200
            },
            {
                "price": "16600.590374446096",
                "timestamp": 1668837900
            },
            {
                "price": "16609.530367146253",
                "timestamp": 1668837600
            },
            {
                "price": "16611.47483045383",
                "timestamp": 1668837300
            },
            {
                "price": "16608.621648056895",
                "timestamp": 1668837000
            },
            {
                "price": "16610.60820735841",
                "timestamp": 1668836700
            },
            {
                "price": "16611.101354867376",
                "timestamp": 1668836400
            },
            {
                "price": "16609.186297365988",
                "timestamp": 1668836100
            },
            {
                "price": "16617.45673108872",
                "timestamp": 1668835800
            },
            {
                "price": "16620.530979421274",
                "timestamp": 1668835500
            },
            {
                "price": "16607.530321071765",
                "timestamp": 1668835200
            },
            {
                "price": "16617.76814187704",
                "timestamp": 1668834900
            },
            {
                "price": "16634.24667091007",
                "timestamp": 1668834600
            },
            {
                "price": "16631.53147144545",
                "timestamp": 1668834300
            },
            {
                "price": "16631.713446539823",
                "timestamp": 1668834000
            },
            {
                "price": "16632.30129447804",
                "timestamp": 1668833700
            },
            {
                "price": "16631.04355873436",
                "timestamp": 1668833400
            },
            {
                "price": "16640.085568907773",
                "timestamp": 1668833100
            },
            {
                "price": "16628.13210736908",
                "timestamp": 1668832800
            },
            {
                "price": "16638.81182501252",
                "timestamp": 1668832500
            },
            {
                "price": "16632.811031713656",
                "timestamp": 1668832200
            },
            {
                "price": "16642.245912950264",
                "timestamp": 1668831900
            },
            {
                "price": "16630.647750427506",
                "timestamp": 1668831600
            },
            {
                "price": "16630.701694906085",
                "timestamp": 1668831300
            },
            {
                "price": "16616.403122300202",
                "timestamp": 1668831000
            },
            {
                "price": "16627.60948607445",
                "timestamp": 1668830700
            },
            {
                "price": "16625.382305527262",
                "timestamp": 1668830400
            },
            {
                "price": "16624.733015479935",
                "timestamp": 1668830100
            },
            {
                "price": "16627.7188552025",
                "timestamp": 1668829800
            },
            {
                "price": "16629.87271045374",
                "timestamp": 1668829500
            },
            {
                "price": "16617.28649734068",
                "timestamp": 1668829200
            },
            {
                "price": "16632.901645214468",
                "timestamp": 1668828900
            },
            {
                "price": "16609.80392665814",
                "timestamp": 1668828600
            },
            {
                "price": "16624.165333248864",
                "timestamp": 1668828300
            },
            {
                "price": "16622.497475442105",
                "timestamp": 1668828000
            },
            {
                "price": "16639.854612080293",
                "timestamp": 1668827700
            },
            {
                "price": "16631.76361174729",
                "timestamp": 1668827400
            },
            {
                "price": "16623.85552141504",
                "timestamp": 1668827100
            },
            {
                "price": "16626.860774369496",
                "timestamp": 1668826800
            },
            {
                "price": "16620.448769276103",
                "timestamp": 1668826500
            },
            {
                "price": "16633.008002642033",
                "timestamp": 1668826200
            },
            {
                "price": "16620.5678430418",
                "timestamp": 1668825900
            },
            {
                "price": "16626.610101081533",
                "timestamp": 1668825600
            },
            {
                "price": "16618.169159601246",
                "timestamp": 1668825300
            },
            {
                "price": "16617.401218945455",
                "timestamp": 1668825000
            },
            {
                "price": "16632.72784535123",
                "timestamp": 1668824700
            },
            {
                "price": "16611.197019727926",
                "timestamp": 1668824400
            },
            {
                "price": "16641.757482923927",
                "timestamp": 1668824100
            },
            {
                "price": "16634.045058566244",
                "timestamp": 1668823800
            },
            {
                "price": "16653.36012081317",
                "timestamp": 1668823500
            },
            {
                "price": "16663.58231331046",
                "timestamp": 1668823200
            },
            {
                "price": "16659.24064789786",
                "timestamp": 1668822900
            },
            {
                "price": "16661.424822271747",
                "timestamp": 1668822600
            },
            {
                "price": "16657.70523617678",
                "timestamp": 1668822300
            },
            {
                "price": "16662.94751756226",
                "timestamp": 1668822000
            },
            {
                "price": "16664.926244044043",
                "timestamp": 1668821700
            },
            {
                "price": "16670.911848937903",
                "timestamp": 1668821400
            },
            {
                "price": "16674.804049444087",
                "timestamp": 1668821100
            },
            {
                "price": "16664.15280682609",
                "timestamp": 1668820800
            },
            {
                "price": "16669.381220144416",
                "timestamp": 1668820500
            },
            {
                "price": "16666.01886038725",
                "timestamp": 1668820200
            },
            {
                "price": "16666.849729666737",
                "timestamp": 1668819900
            },
            {
                "price": "16663.83067176031",
                "timestamp": 1668819600
            },
            {
                "price": "16664.62021374063",
                "timestamp": 1668819300
            },
            {
                "price": "16672.146792190717",
                "timestamp": 1668819000
            },
            {
                "price": "16664.480180908136",
                "timestamp": 1668818700
            },
            {
                "price": "16675.99927878823",
                "timestamp": 1668818400
            },
            {
                "price": "16666.907990823227",
                "timestamp": 1668818100
            },
            {
                "price": "16685.803502226292",
                "timestamp": 1668817800
            },
            {
                "price": "16676.357184532146",
                "timestamp": 1668817500
            },
            {
                "price": "16669.604000560434",
                "timestamp": 1668817200
            },
            {
                "price": "16682.470054372847",
                "timestamp": 1668816900
            },
            {
                "price": "16680.20844495793",
                "timestamp": 1668816600
            },
            {
                "price": "16674.97515958503",
                "timestamp": 1668816300
            },
            {
                "price": "16682.364874671577",
                "timestamp": 1668816000
            },
            {
                "price": "16677.673903727038",
                "timestamp": 1668815700
            },
            {
                "price": "16682.84076432974",
                "timestamp": 1668815400
            },
            {
                "price": "16660.594185247945",
                "timestamp": 1668815100
            },
            {
                "price": "16678.52951712089",
                "timestamp": 1668814800
            },
            {
                "price": "16654.943828626157",
                "timestamp": 1668814500
            },
            {
                "price": "16644.12733251621",
                "timestamp": 1668814200
            },
            {
                "price": "16638.080854645927",
                "timestamp": 1668813900
            },
            {
                "price": "16638.303823639737",
                "timestamp": 1668813600
            },
            {
                "price": "16628.710050340207",
                "timestamp": 1668813300
            },
            {
                "price": "16645.948610316354",
                "timestamp": 1668813000
            },
            {
                "price": "16632.50783461908",
                "timestamp": 1668812700
            },
            {
                "price": "16651.293240489773",
                "timestamp": 1668812400
            },
            {
                "price": "16653.38657799622",
                "timestamp": 1668812100
            },
            {
                "price": "16648.41842362157",
                "timestamp": 1668811800
            },
            {
                "price": "16638.58117420382",
                "timestamp": 1668811500
            },
            {
                "price": "16631.719766027698",
                "timestamp": 1668811200
            },
            {
                "price": "16629.809661883355",
                "timestamp": 1668810900
            },
            {
                "price": "16638.06330987609",
                "timestamp": 1668810600
            },
            {
                "price": "16648.611404098567",
                "timestamp": 1668810300
            },
            {
                "price": "16640.790868033437",
                "timestamp": 1668810000
            },
            {
                "price": "16637.233562986763",
                "timestamp": 1668809700
            },
            {
                "price": "16634.510746508244",
                "timestamp": 1668809400
            },
            {
                "price": "16633.99700845271",
                "timestamp": 1668809100
            },
            {
                "price": "16644.972783108617",
                "timestamp": 1668808800
            },
            {
                "price": "16639.404657588944",
                "timestamp": 1668808500
            },
            {
                "price": "16648.90146501102",
                "timestamp": 1668808200
            },
            {
                "price": "16641.622033787255",
                "timestamp": 1668807900
            },
            {
                "price": "16642.4979943412",
                "timestamp": 1668807600
            },
            {
                "price": "16632.285268136242",
                "timestamp": 1668807300
            },
            {
                "price": "16639.218090054703",
                "timestamp": 1668807000
            },
            {
                "price": "16638.141535649127",
                "timestamp": 1668806700
            },
            {
                "price": "16634.45262645382",
                "timestamp": 1668806400
            },
            {
                "price": "16640.715546271756",
                "timestamp": 1668806100
            },
            {
                "price": "16635.733126284984",
                "timestamp": 1668805800
            },
            {
                "price": "16630.479958035085",
                "timestamp": 1668805500
            },
            {
                "price": "16624.333580584105",
                "timestamp": 1668805200
            },
            {
                "price": "16612.88539503456",
                "timestamp": 1668804900
            },
            {
                "price": "16622.374426383318",
                "timestamp": 1668804600
            },
            {
                "price": "16613.35496222099",
                "timestamp": 1668804300
            },
            {
                "price": "16612.531820777866",
                "timestamp": 1668804000
            },
            {
                "price": "16614.145712105103",
                "timestamp": 1668803700
            },
            {
                "price": "16627.27598031573",
                "timestamp": 1668803400
            },
            {
                "price": "16627.774413284762",
                "timestamp": 1668803100
            },
            {
                "price": "16622.616472130878",
                "timestamp": 1668802800
            },
            {
                "price": "16642.016094360024",
                "timestamp": 1668802500
            },
            {
                "price": "16620.16793461099",
                "timestamp": 1668802200
            },
            {
                "price": "16625.940311959475",
                "timestamp": 1668801900
            },
            {
                "price": "16624.234342242653",
                "timestamp": 1668801600
            },
            {
                "price": "16598.4564841271",
                "timestamp": 1668801300
            },
            {
                "price": "16589.40507922264",
                "timestamp": 1668801000
            },
            {
                "price": "16595.583949136766",
                "timestamp": 1668800700
            },
            {
                "price": "16586.30692461475",
                "timestamp": 1668800400
            },
            {
                "price": "16595.779055406907",
                "timestamp": 1668800100
            },
            {
                "price": "16592.682356358135",
                "timestamp": 1668799800
            },
            {
                "price": "16593.55485581705",
                "timestamp": 1668799500
            },
            {
                "price": "16570.235704817762",
                "timestamp": 1668799200
            },
            {
                "price": "16577.996080552282",
                "timestamp": 1668798900
            },
            {
                "price": "16576.866961644588",
                "timestamp": 1668798600
            },
            {
                "price": "16590.885536187314",
                "timestamp": 1668798300
            },
            {
                "price": "16587.27663837348",
                "timestamp": 1668798000
            },
            {
                "price": "16572.96301054436",
                "timestamp": 1668797700
            },
            {
                "price": "16575.268749241288",
                "timestamp": 1668797400
            },
            {
                "price": "16585.109663402927",
                "timestamp": 1668797100
            },
            {
                "price": "16584.201973450006",
                "timestamp": 1668796800
            },
            {
                "price": "16577.039636205987",
                "timestamp": 1668796500
            },
            {
                "price": "16590.392808777964",
                "timestamp": 1668796200
            },
            {
                "price": "16582.78862301583",
                "timestamp": 1668795900
            },
            {
                "price": "16583.882069289426",
                "timestamp": 1668795600
            },
            {
                "price": "16599.009574258",
                "timestamp": 1668795300
            },
            {
                "price": "16605.530358804826",
                "timestamp": 1668795000
            },
            {
                "price": "16597.024622744604",
                "timestamp": 1668794700
            },
            {
                "price": "16611.344368377002",
                "timestamp": 1668794400
            },
            {
                "price": "16588.814813806024",
                "timestamp": 1668794100
            },
            {
                "price": "16602.019892559314",
                "timestamp": 1668793800
            },
            {
                "price": "16597.282655890085",
                "timestamp": 1668793500
            },
            {
                "price": "16602.30056857054",
                "timestamp": 1668793200
            },
            {
                "price": "16610.886629191486",
                "timestamp": 1668792900
            },
            {
                "price": "16623.95772509985",
                "timestamp": 1668792600
            },
            {
                "price": "16608.81409562095",
                "timestamp": 1668792300
            },
            {
                "price": "16618.88105337495",
                "timestamp": 1668792000
            },
            {
                "price": "16627.34429969775",
                "timestamp": 1668791700
            },
            {
                "price": "16605.27354278069",
                "timestamp": 1668791400
            },
            {
                "price": "16653.41558519062",
                "timestamp": 1668791100
            },
            {
                "price": "16665.319346124325",
                "timestamp": 1668790800
            },
            {
                "price": "16658.475626680305",
                "timestamp": 1668790500
            },
            {
                "price": "16666.808182946403",
                "timestamp": 1668790200
            },
            {
                "price": "16681.18507488537",
                "timestamp": 1668789900
            },
            {
                "price": "16674.58954604672",
                "timestamp": 1668789600
            },
            {
                "price": "16687.1568273909",
                "timestamp": 1668789300
            },
            {
                "price": "16691.46077727914",
                "timestamp": 1668789000
            },
            {
                "price": "16695.3035181678",
                "timestamp": 1668788700
            },
            {
                "price": "16712.755151582143",
                "timestamp": 1668788400
            },
            {
                "price": "16700.27998691935",
                "timestamp": 1668788100
            },
            {
                "price": "16699.104955895942",
                "timestamp": 1668787800
            },
            {
                "price": "16698.6702480623",
                "timestamp": 1668787500
            },
            {
                "price": "16687.517671629692",
                "timestamp": 1668787200
            },
            {
                "price": "16711.004435307914",
                "timestamp": 1668786900
            },
            {
                "price": "16699.78020350354",
                "timestamp": 1668786600
            },
            {
                "price": "16704.94607799562",
                "timestamp": 1668786300
            },
            {
                "price": "16696.016250967434",
                "timestamp": 1668786000
            },
            {
                "price": "16700.13256692067",
                "timestamp": 1668785700
            },
            {
                "price": "16695.263976545608",
                "timestamp": 1668785400
            },
            {
                "price": "16683.354523864607",
                "timestamp": 1668785100
            },
            {
                "price": "16695.01276975326",
                "timestamp": 1668784800
            },
            {
                "price": "16678.757693026004",
                "timestamp": 1668784500
            },
            {
                "price": "16682.246854053403",
                "timestamp": 1668784200
            },
            {
                "price": "16681.302328799295",
                "timestamp": 1668783900
            },
            {
                "price": "16704.355447617185",
                "timestamp": 1668783600
            },
            {
                "price": "16739.238235363624",
                "timestamp": 1668783300
            },
            {
                "price": "16687.471521091877",
                "timestamp": 1668783000
            },
            {
                "price": "16750.367596201308",
                "timestamp": 1668782700
            },
            {
                "price": "16753.69111233577",
                "timestamp": 1668782400
            },
            {
                "price": "16755.35815608119",
                "timestamp": 1668782100
            },
            {
                "price": "16770.549744500295",
                "timestamp": 1668781800
            },
            {
                "price": "16754.34298752579",
                "timestamp": 1668781500
            },
            {
                "price": "16772.542664660712",
                "timestamp": 1668781200
            },
            {
                "price": "16761.82694560004",
                "timestamp": 1668780900
            },
            {
                "price": "16756.024988213798",
                "timestamp": 1668780600
            },
            {
                "price": "16763.48967981997",
                "timestamp": 1668780300
            },
            {
                "price": "16754.550079870067",
                "timestamp": 1668780000
            },
            {
                "price": "16766.887498814733",
                "timestamp": 1668779700
            },
            {
                "price": "16746.740946050784",
                "timestamp": 1668779400
            },
            {
                "price": "16779.08410075975",
                "timestamp": 1668779100
            },
            {
                "price": "16786.39617253934",
                "timestamp": 1668778800
            },
            {
                "price": "16786.149841516213",
                "timestamp": 1668778500
            },
            {
                "price": "16776.37769776546",
                "timestamp": 1668778200
            },
            {
                "price": "16783.882144298335",
                "timestamp": 1668777900
            },
            {
                "price": "16771.284950063822",
                "timestamp": 1668777600
            },
            {
                "price": "16776.771196916787",
                "timestamp": 1668777300
            },
            {
                "price": "16766.705968189115",
                "timestamp": 1668777000
            },
            {
                "price": "16778.03180655026",
                "timestamp": 1668776700
            },
            {
                "price": "16764.72189511985",
                "timestamp": 1668776400
            },
            {
                "price": "16772.841078298286",
                "timestamp": 1668776100
            },
            {
                "price": "16756.641209364956",
                "timestamp": 1668775800
            },
            {
                "price": "16764.290160858447",
                "timestamp": 1668775500
            },
            {
                "price": "16760.158895937064",
                "timestamp": 1668775200
            },
            {
                "price": "16755.920889748748",
                "timestamp": 1668774900
            },
            {
                "price": "16764.462771400646",
                "timestamp": 1668774600
            },
            {
                "price": "16754.35601686398",
                "timestamp": 1668774300
            },
            {
                "price": "16760.07943316101",
                "timestamp": 1668774000
            },
            {
                "price": "16751.111747315586",
                "timestamp": 1668773700
            },
            {
                "price": "16756.095041602748",
                "timestamp": 1668773400
            },
            {
                "price": "16763.87815433203",
                "timestamp": 1668773100
            },
            {
                "price": "16744.1520331635",
                "timestamp": 1668772800
            },
            {
                "price": "16750.311931556083",
                "timestamp": 1668772500
            },
            {
                "price": "16743.04666574524",
                "timestamp": 1668772200
            },
            {
                "price": "16735.032717517824",
                "timestamp": 1668771900
            },
            {
                "price": "16732.328051895773",
                "timestamp": 1668771600
            },
            {
                "price": "16756.927297654624",
                "timestamp": 1668771300
            },
            {
                "price": "16751.30674486558",
                "timestamp": 1668771000
            },
            {
                "price": "16751.63281452603",
                "timestamp": 1668770700
            },
            {
                "price": "16764.235211535994",
                "timestamp": 1668770400
            },
            {
                "price": "16756.73303626045",
                "timestamp": 1668770100
            },
            {
                "price": "16758.87884835704",
                "timestamp": 1668769800
            },
            {
                "price": "16764.080901386267",
                "timestamp": 1668769500
            },
            {
                "price": "16757.251189981893",
                "timestamp": 1668769200
            },
            {
                "price": "16754.83033412299",
                "timestamp": 1668768900
            },
            {
                "price": "16756.720840068396",
                "timestamp": 1668768600
            },
            {
                "price": "16732.86431839497",
                "timestamp": 1668768300
            },
            {
                "price": "16774.405675197006",
                "timestamp": 1668768000
            },
            {
                "price": "16764.11197064847",
                "timestamp": 1668767700
            },
            {
                "price": "16785.942760321057",
                "timestamp": 1668767400
            },
            {
                "price": "16744.185610393637",
                "timestamp": 1668767100
            },
            {
                "price": "16780.31456616268",
                "timestamp": 1668766800
            },
            {
                "price": "16748.404269748233",
                "timestamp": 1668766500
            },
            {
                "price": "16766.670713122792",
                "timestamp": 1668766200
            },
            {
                "price": "16742.66484941049",
                "timestamp": 1668765900
            },
            {
                "price": "16730.099489074928",
                "timestamp": 1668765600
            },
            {
                "price": "16736.99117858393",
                "timestamp": 1668765300
            },
            {
                "price": "16719.591883658675",
                "timestamp": 1668765000
            },
            {
                "price": "16736.6573189267",
                "timestamp": 1668764700
            },
            {
                "price": "16731.408648260003",
                "timestamp": 1668764400
            },
            {
                "price": "16743.845020478173",
                "timestamp": 1668764100
            },
            {
                "price": "16739.53365220049",
                "timestamp": 1668763800
            },
            {
                "price": "16734.474875850654",
                "timestamp": 1668763500
            },
            {
                "price": "16738.693312970463",
                "timestamp": 1668763200
            },
            {
                "price": "16733.116304597792",
                "timestamp": 1668762900
            },
            {
                "price": "16738.02484974021",
                "timestamp": 1668762600
            },
            {
                "price": "16723.88091367873",
                "timestamp": 1668762300
            }
        ]
    }




    const clicked = async (id) => {
        const new_ = { balance: bal }
        const doc_ = doc(db, "user", id)
        sessionStorage.removeItem('balance')
        sessionStorage.setItem("balance", bal)
        await updateDoc(doc_, new_)
        console.log(id)


    }

    const ref = collection(db, "transaction");
    const save = async () => {
        sessionStorage.removeItem('balance')
        sessionStorage.setItem("balance", bal)
        await addDoc(ref, { status: "buy", fi_id: `${sessionStorage.getItem("fi_id")}`, number_stock: stock, stock: `${location.state.symbol}`, totalprice: `${stock * location.state.price}` })

    }

    let a



    let time = []
            let pri = []


    useEffect(() => {
        async function fetchMoviesJSON() {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '9be73ef885mshba4ffce1e2b9442p1a2d69jsndd40b3e2500c',
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
            };
            const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options)
            const movies = await response.json();
            return movies;
        }
        fetchMoviesJSON().then(movies => {

            setdata_(movies)
            console.log("+++++++")

            console.log(movies) // fetched movies
            
           
        });


    }, [1])

    var user = (localStorage.getItem('data'))
console.log(user)



    a=ext.history
    console.log(a)
  
    for (const key in a) {
     
            pri.push(ext.history[key].price)
            var date = new Date(ext.history[key].timestamp * 1000);
    
            time.push(date.toLocaleTimeString("default"))
    
        
    }






    let h = window.innerHeight
    const location = useLocation();
    const labels = time

    const data = {
        labels,
        datasets: [

            {
                label: 'Dataset 2',
                data: pri,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };



   

    return (
        <>

            {sessionStorage.getItem("name") ? console.log("yes") : navigate("/login")}
            <div className="navBar">
                <div className="logo">
                    <img src="Logo.svg" style={{ width: "200px" }} className="logo2" alt="Logo" />
                </div>
                <div className="menus">
                    <ul>
                        <Link to="/home_" style={{ color: "white", textDecoration: "none" }}>  <li>Stocks</li></Link>
                        <li>Predictor</li>
                        <Link to="/extra" style={{ color: "white", textDecoration: "none" }}> <li>Profile</li></Link>
                        <Link to="/wallet" style={{ color: "white", textDecoration: "none" }}> <li>Wallet</li></Link>
                    </ul>
                </div>
                <div className="Sign up" onClick={() => {
                    navigate("/extra")
                }}><i className="fa fa-user-circle" style={{ fontSize: '36px', cursor: "pointer" }} />
                </div>
            </div>





            <div className={styles.upper_box}>

                <div className={styles.left_side}>
                    <img src={location.state.url} alt="" className={styles.img} />
                    <h2 className={styles.symbol}>{location.state.symbol}</h2>
                </div>

                <div className={styles.right_side}>
                    <h2 className={styles.change_data} style={{ color: `${location.state.change>0?"green":"red"}` }}>{location.state.change}</h2>
                    <h2 className={styles.price_data}>{location.state.price}  USDT</h2>
                </div>
            </div>



            <div className={styles.buy}>
                <h1 className={styles.buy_text}>Do you want to buy?</h1>
                <div className={styles.btn_buy}> <Popup
                    trigger={<button className={styles.button}> BUY NOW </button>}
                    modal
                    nested
                >
                    {close => (
                        <div className={styles.modal}>
                            <button className={styles.close} onClick={close}>
                                &times;
                            </button>
                            <div className={styles.header}> <h1>BUY</h1> </div>
                            <div className={styles.content}>
                                {' '}
                                <h1 className={styles.buy_stock}>  Enter the number of stock you want to buy</h1>
                                <div className={styles.num}>
                                    <input type="text" className={styles.buy_number} onChange={onchange_2} value={stock} />
                                </div>


                                <div className={styles.total}>
                                    <h1 className={styles.total_text}>Total Price:{stock * location.state.price}</h1>
                                    <h1 className={styles.error}>{er}</h1>
                                </div>


                                <div className={styles.ok_btn} onClick={() => {
                                    console.log('modal closed ');
                                    if (stock * location.state.price > bal) {
                                        console.log("error")
                                        seter("please enter tha vaild in put")
                                        sessionStorage.removeItem('balance')
                                        sessionStorage.setItem("balance", bal)
                                    }
                                    else {
                                        seter("")
                                        // bal=bal-stock*location.state.price;
                                        setbal(bal - stock * location.state.price)
                                        sessionStorage.removeItem('balance')
                                        sessionStorage.setItem("balance", bal)
                                        clicked(sessionStorage.getItem("id"))
                                        save()
                                        // navigate('/su_pay')
                                        close();
                                    }
                                }}>
                                    <h1 style={{ fontSize: "17px", textAlign: 'center' }}>BUY</h1>
                                </div>

                            </div>
                            <div className={styles.actions}>

                                <button
                                    className={styles.button}
                                    onClick={() => {
                                        console.log('modal closed ');

                                        close();
                                    }}
                                >
                                    <h2>CLOSE</h2>
                                </button>
                            </div>
                        </div>
                    )}
                </Popup></div>
            </div>


            <div className={styles.chart} style={{ height: `${h - 100}px`, width: "90%", margin: "auto" }}>
                <Line data={data} />
            </div>
            {/* <h1 className={styles.overview_head}>Overview</h1>



            <div className={styles.newsec}>
                <div className={styles.newleft}>
                    <div className={styles.head29}>Value statistics</div>
                    <div className={styles.info22}>
                        <div className={styles.text12}> <i className="fa fa-user-circle" id="icon22" ></i>Price to USD</div>
                        <div className={styles.ans}><b>₹ 16,648.72</b></div>
                    </div>
                    <hr />
                    <div className={styles.info22}>
                        <div className={styles.text12}> <i className="fa fa-user-circle" id="icon22" ></i>Price to USD</div>
                        <div className={styles.ans}><b>₹ 16,648.72</b></div>
                    </div>
                    <hr />
                    <div className={styles.info22}>
                        <div className={styles.text12}> <i className="fa fa-user-circle" id="icon22" ></i>Price to USD</div>
                        <div className={styles.ans}><b>₹ 16,648.72</b></div>
                    </div>
                    <div className={styles.info22}>
                        <div className={styles.text12}> <i className="fa fa-user-circle" id="icon22" ></i>Price to USD</div>
                        <div className={styles.ans}><b>₹ 16,648.72</b></div>
                    </div>
                    <div className={styles.info22}>
                        <div className={styles.text12}> <i className="fa fa-user-circle" id="icon22" ></i>Price to USD</div>
                        <div className={styles.ans}><b>₹ 16,648.72</b></div>
                    </div>
                    <div className={styles.info22}>
                        <div className={styles.text12}> <i className="fa fa-user-circle" id="icon22" ></i>Price to USD</div>
                        <div className={styles.ans}><b>₹ 16,648.72</b></div>
                    </div>
                    <div className={styles.info22}>
                        <div className={styles.text12}> <i className="fa fa-user-circle" id="icon22" ></i>Price to USD</div>
                        <div className={styles.ans}><b>₹ 16,648.72</b></div>
                    </div>
                </div>


                <div className={styles.newright}>
                    <div className={styles.head29}>Supply information</div>
                    <div className={styles.info2forbg}>
                        <div className={styles.info22}>
                            <div className={styles.text12}>Price to USD</div>
                            <div className={styles.ans}><b>₹ 16,648.72</b></div>
                        </div>
                        <div className={styles.info22}>
                            <div className={styles.text12}>Price to USD</div>
                            <div className={styles.ans}><b>₹ 16,648.72</b></div>
                        </div>
                        <div className={styles.info22}>
                            <div className={styles.text12}>Price to USD</div>
                            <div className={styles.ans}><b>₹ 16,648.72</b></div>
                        </div>
                        <div className={styles.info22}>
                            <div className={styles.text12}>Price to USD</div>
                            <div className={styles.ans}><b>₹ 16,648.72</b></div>
                        </div>
                        <div className={styles.info22}>
                            <div className={styles.text12}>Price to USD</div>
                            <div className={styles.ans}><b>₹ 16,648.72</b></div>
                        </div>
                    </div>

                </div>
            </div> */}


            <footer>
                <div className="foot" style={{ backgroundImage: "url(background5.png)" }}>
                    <img src="Logo.svg" style={{ width: "200px" }} alt="" />
                    <div className="menus" id="nav2">
                        <ul id="nav3">
                            <li>Stocks</li>
                            <li>Predictor</li>
                            <Link to="/extra" style={{ color: "white", textDecoration: "none" }}> <li>Profile</li></Link>
                            <Link to="/wallet" style={{ color: "white", textDecoration: "none" }}> <li>Wallet</li></Link>
                        </ul>
                    </div>
                    <div className="social">
                        <i className="fa fa-linkedin-square" style={{ fontSize: '36px' }} />
                        <i className="fa fa-github" style={{ fontSize: '36px' }} />
                    </div>
                </div>
            </footer>






        </>
    )
}

export default Coin_detail


