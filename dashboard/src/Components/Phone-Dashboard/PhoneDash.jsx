import React, { useEffect, useState } from 'react'
import style from "../../CSS/PhoneDash.module.css"
import HighlightBox from './HighlightBox'

import { MdCall, MdPhoneMissed } from "react-icons/md";
import { FiArrowDownLeft, FiArrowUpRight } from "react-icons/fi";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";





const options = [
    {
        id: 0,
        value: "Today"
    },
    {
        id: 1,
        value: "Yesterday"
    },
    {
        id: 2,
        value: "Past Week"
    },
    {
        id: 3,
        value: "Past Month"
    },
    {
        id: 4,
        value: "Current Month"
    },
    {
        id: 4,
        value: "Select Date"
    }
]

const Data = [
    {
        id: 0,
        title: "Total Calls",
        total: 1900,
        tag: "+ 20%",
        from: "From Last Month",
        icon: <MdCall />,
        tagBG: "rgba(169, 206, 255, 0.33)",
        tagColor: "white"

    },
    {
        id: 1,
        title: "Incoming Calls",
        total: 302,
        tag: "+ 20%",
        from: "From Last Month",
        icon: <FiArrowDownLeft />,
        tagBG: "rgba(34, 204, 94, 0.33)",
        tagColor: "#22CC5E"
    },
    {
        id: 2,
        title: "Outgoing Calls",
        total: 710,
        tag: "+ 20%",
        from: "From Last Month",
        icon: <FiArrowUpRight />,
        tagBG: "rgba(34, 204, 94, 0.33)",
        tagColor: "#22CC5E"
    },
    {
        id: 3,
        title: "Missed Calls",
        total: 920,
        tag: "+ 20%",
        from: "From Last Month",
        icon: <MdPhoneMissed />,
        tagBG: "rgba(239, 68, 68, 0.33)",
        tagColor: "#EF4444"
    },


]

const SPFStyle = {
    backgroundColor: "#6366F1",
    color: "white",
    border: "0px"
}

const PhoneDash = () => {

    const [LC, setLC] = useState(true);
    const [QC, setQC] = useState(false);
    const [IC, setIC] = useState(false);
    const [PC, setPC] = useState(false);
    const [UC, setUC] = useState(false);

    const [pagi, setpagi] = useState(1)

    useEffect(() => {

    }, [])

    const LCHandle = () => {
        setLC(true);
        setQC(false);
        setIC(false);
        setPC(false);
        setUC(false);
    }
    const QCHandle = () => {
        setLC(false);
        setQC(true);
        setIC(false);
        setPC(false);
        setUC(false);
    }
    const ICHandle = () => {
        setLC(false);
        setQC(false);
        setIC(true);
        setPC(false);
        setUC(false);
    }
    const PCHandle = () => {
        setLC(false);
        setQC(false);
        setIC(false);
        setPC(true);
        setUC(false);
    }
    const UCHandle = () => {
        setLC(false);
        setQC(false);
        setIC(false);
        setPC(false);
        setUC(true);
    }

    const StyleCall = {
        backgroundColor: "#E2E8F0",
        color: "#0F172A",
        borderBottom: "3px solid #0F172A",
    }
    const ActivePagination = {
        borderBottom: "2px solid #6366F1",
        fontWeight: "600",
        marginTop: "1px"
    }


    return (
        <div id={style.PhoneDash}>
            <div id={style.PD1}>
                <p>Here's your analytic for :</p>
                <select name="" id="" >
                    {
                        options.map((e) => {
                            return <option value={e.value} key={e.id} id={e.id} >{e.value}</option>
                        })
                    }
                </select>
            </div>
            <div id={style.PD2}>
                {
                    Data.map((e) => {
                        return <HighlightBox {...e} SPFStyle={e.id === 0 ? SPFStyle : ""} />
                    })
                }
            </div>
            <div id={style.PD3}>
                <div id={style.MenuButtons}>
                    <button
                        onClick={() => LCHandle()}
                        style={LC ? { ...StyleCall, borderTopLeftRadius: "10px" } : { color: "#94A3B8", borderBottom: "3px solid #94A3B8", borderTopLeftRadius: "10px" }}
                    >
                        Live Call
                    </button>
                    <button
                        onClick={() => QCHandle()}
                        style={QC ? StyleCall : { color: "#94A3B8", borderBottom: "3px solid #94A3B8" }}
                    >
                        Queue Call
                    </button>
                    <button
                        onClick={() => ICHandle()}
                        style={IC ? StyleCall : { color: "#94A3B8", borderBottom: "3px solid #94A3B8" }}
                    >
                        Important Call
                    </button>
                    <button
                        onClick={() => PCHandle()}
                        style={PC ? StyleCall : { color: "#94A3B8", borderBottom: "3px solid #94A3B8" }}
                    >
                        Personal Call
                    </button>
                    <button
                        onClick={() => UCHandle()}
                        style={UC ? { ...StyleCall, borderTopRightRadius: "10px" } : { color: "#94A3B8", borderBottom: "3px solid #94A3B8", borderTopRightRadius: "10px" }}
                    >
                        Unknown Call
                    </button>
                </div>
                <div id={style.CallTable}>
                    <table>
                        <tr>
                            <th>Sr. No.</th>
                            <th>DID</th>
                            <th>Agent Name</th>
                            <th>Call Time</th>
                            <th>Caller Nummber</th>
                            <th>Caller Name</th>
                            <th>Duration</th>
                            <th>Status</th>
                            <th>Call Type</th>
                            <th>Group</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DODA</td>
                            <td>SHEETAL</td>
                            <td>11:00 AM</td>
                            <td>9378362897</td>
                            <td>PURNIMA</td>
                            <td>02:08:27</td>
                            <td>OUTGOING</td>
                            <td>A</td>
                            <td>XX</td>
                            <td>XX</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DODA</td>
                            <td>SHEETAL</td>
                            <td>11:00 AM</td>
                            <td>9378362897</td>
                            <td>PURNIMA</td>
                            <td>02:08:27</td>
                            <td>OUTGOING</td>
                            <td>A</td>
                            <td>XX</td>
                            <td>XX</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DODA</td>
                            <td>SHEETAL</td>
                            <td>11:00 AM</td>
                            <td>9378362897</td>
                            <td>PURNIMA</td>
                            <td>02:08:27</td>
                            <td>OUTGOING</td>
                            <td>A</td>
                            <td>XX</td>
                            <td>XX</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DODA</td>
                            <td>SHEETAL</td>
                            <td>11:00 AM</td>
                            <td>9378362897</td>
                            <td>PURNIMA</td>
                            <td>02:08:27</td>
                            <td>OUTGOING</td>
                            <td>A</td>
                            <td>XX</td>
                            <td>XX</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DODA</td>
                            <td>SHEETAL</td>
                            <td>11:00 AM</td>
                            <td>9378362897</td>
                            <td>PURNIMA</td>
                            <td>02:08:27</td>
                            <td>OUTGOING</td>
                            <td>A</td>
                            <td>XX</td>
                            <td>XX</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>DODA</td>
                            <td>SHEETAL</td>
                            <td>11:00 AM</td>
                            <td>9378362897</td>
                            <td>PURNIMA</td>
                            <td>02:08:27</td>
                            <td>OUTGOING</td>
                            <td>A</td>
                            <td>XX</td>
                            <td>XX</td>
                        </tr>
                    </table>
                </div>
                <div id={style.Pagination}>
                    <button
                        onClick={() => { setpagi(prev => prev - 1) }}
                        disabled={pagi === 1 ? true : false}
                    >
                        <IoMdArrowDropleft
                            fontSize={"20px"}
                            style={{ marginTop: "-3px" }}
                        />
                        prev
                    </button>

                    <button style={pagi<=8?ActivePagination:{textAlign:"center"}}>{pagi}</button>
                    <button >{pagi + 1}</button>
                    <button >{pagi + 2}</button>
                    <button >{pagi + 3}</button>
                    <button >{pagi + 4}</button>

                    <button
                        onClick={() => { setpagi(prev => prev + 1) }}
                        disabled={pagi === 8 ? true : false}
                    >
                        next
                        <IoMdArrowDropright
                            fontSize={"20px"}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PhoneDash
