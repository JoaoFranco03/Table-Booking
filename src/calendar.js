import moment from "moment";
import React, { Component } from "react";
import "antd/lib/style/index.less"; //Add this code for locally example
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT,
} from "react-big-scheduler";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Select from "react-select";
import NumericInput from "react-numeric-input";

// Data
let resources = [
  {
    id: "r1",
    name: "Cafetaria",
  },
  {
    id: "r2",
    name: "Restaurante",
  },
  {
    id: "r3",
    name: "Bar Lounge",
  },
  {
    id: "r4",
    name: "Take-Away Kiosk",
  },
  {
    id: "r5",
    name: "Restaurant Lounge",
  },
  {
    id: "r6",
    name: "Pool Bar",
  },
  {
    id: "r7",
    name: "Esplanada",
  },
  {
    id: "r8",
    name: "Grab & GO",
  },
  {
    parentId: "r1",
    id: "r9",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 1",
  },
  {
    parentId: "r1",
    id: "r10",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 2",
  },
  {
    parentId: "r1",
    id: "r11",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 3",
  },
  {
    parentId: "r1",
    id: "r12",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 4",
  },
  {
    parentId: "r1",
    id: "r13",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 5",
  },
  {
    parentId: "r1",
    id: "r14",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 6",
  },
  {
    parentId: "r1",
    id: "r15",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 7",
  },
  {
    parentId: "r1",
    id: "r16",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 8",
  },
  {
    parentId: "r1",
    id: "r17",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 9",
  },
  {
    parentId: "r1",
    id: "r18",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 10",
  },
  {
    parentId: "r1",
    id: "r19",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 11",
  },
  {
    parentId: "r1",
    id: "r20",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 12",
  },
  {
    parentId: "r1",
    id: "r21",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 13",
  },
  {
    parentId: "r1",
    id: "r22",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 14",
  },
  {
    parentId: "r1",
    id: "r23",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 15",
  },
  {
    parentId: "r1",
    id: "r24",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 16",
  },
  {
    parentId: "r1",
    id: "r25",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 17",
  },
  {
    parentId: "r1",
    id: "r26",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 18",
  },
  {
    parentId: "r1",
    id: "r27",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 19",
  },
  {
    parentId: "r1",
    id: "r28",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 20",
  },
  {
    parentId: "r1",
    id: "r29",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 21",
  },
  {
    parentId: "r1",
    id: "r30",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 22",
  },
  {
    parentId: "r1",
    id: "r31",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 23",
  },
  {
    parentId: "r1",
    id: "r32",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 24",
  },
  {
    parentId: "r1",
    id: "r33",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 25",
  },
  {
    parentId: "r1",
    id: "r34",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 26",
  },
  {
    parentId: "r1",
    id: "r35",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 27",
  },
  {
    parentId: "r1",
    id: "r36",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 28",
  },
  {
    parentId: "r1",
    id: "r37",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 29",
  },
  {
    parentId: "r1",
    id: "r38",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 30",
  },
  {
    parentId: "r1",
    id: "r39",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 31",
  },
  {
    parentId: "r1",
    id: "r40",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 32",
  },
  {
    parentId: "r1",
    id: "r41",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 33",
  },
  {
    parentId: "r1",
    id: "r42",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 34",
  },
  {
    parentId: "r1",
    id: "r43",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 35",
  },
  {
    parentId: "r1",
    id: "r44",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 36",
  },
  {
    parentId: "r1",
    id: "r45",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 37",
  },
  {
    parentId: "r1",
    id: "r46",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 38",
  },
  {
    parentId: "r1",
    id: "r47",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 39",
  },
  {
    parentId: "r1",
    id: "r48",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 40",
  },
  {
    parentId: "r1",
    id: "r49",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 41",
  },
  {
    parentId: "r1",
    id: "r50",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 42",
  },
  {
    parentId: "r1",
    id: "r51",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 43",
  },
  {
    parentId: "r1",
    id: "r52",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 44",
  },
  {
    parentId: "r1",
    id: "r53",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 45",
  },
  {
    parentId: "r1",
    id: "r54",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 46",
  },
  {
    parentId: "r1",
    id: "r55",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 47",
  },
  {
    parentId: "r1",
    id: "r56",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 48",
  },
  {
    parentId: "r1",
    id: "r57",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 49",
  },
  {
    parentId: "r1",
    id: "r58",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 50",
  },
  {
    parentId: "r1",
    id: "r59",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 51",
  },
  {
    parentId: "r1",
    id: "r60",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 52",
  },
  {
    parentId: "r1",
    id: "r61",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 53",
  },
  {
    parentId: "r1",
    id: "r62",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 54",
  },
  {
    parentId: "r1",
    id: "r63",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 55",
  },
  {
    parentId: "r1",
    id: "r64",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 56",
  },
  {
    parentId: "r1",
    id: "r65",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 57",
  },
  {
    parentId: "r1",
    id: "r66",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 58",
  },
  {
    parentId: "r1",
    id: "r67",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 59",
  },
  {
    parentId: "r1",
    id: "r68",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 60",
  },
  {
    parentId: "r1",
    id: "r69",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 61",
  },
  {
    parentId: "r2",
    id: "r70",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 62",
  },
  {
    parentId: "r2",
    id: "r71",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 63",
  },
  {
    parentId: "r2",
    id: "r72",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 64",
  },
  {
    parentId: "r2",
    id: "r73",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 65",
  },
  {
    parentId: "r2",
    id: "r74",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 66",
  },
  {
    parentId: "r2",
    id: "r75",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 67",
  },
  {
    parentId: "r2",
    id: "r76",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 68",
  },
  {
    parentId: "r2",
    id: "r77",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 69",
  },
  {
    parentId: "r2",
    id: "r78",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 70",
  },
  {
    parentId: "r2",
    id: "r79",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 71",
  },
  {
    parentId: "r2",
    id: "r80",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 72",
  },
  {
    parentId: "r2",
    id: "r81",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 73",
  },
  {
    parentId: "r2",
    id: "r82",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 74",
  },
  {
    parentId: "r2",
    id: "r83",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 75",
  },
  {
    parentId: "r2",
    id: "r84",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 76",
  },
  {
    parentId: "r2",
    id: "r85",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 77",
  },
  {
    parentId: "r2",
    id: "r86",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 78",
  },
  {
    parentId: "r2",
    id: "r87",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 79",
  },
  {
    parentId: "r2",
    id: "r88",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 80",
  },
  {
    parentId: "r2",
    id: "r89",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 81",
  },
  {
    parentId: "r2",
    id: "r90",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 82",
  },
  {
    parentId: "r2",
    id: "r91",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 83",
  },
  {
    parentId: "r2",
    id: "r92",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 84",
  },
  {
    parentId: "r2",
    id: "r93",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 85",
  },
  {
    parentId: "r3",
    // SectorCode: "4",
    id: "r94",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 86",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r95",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 87",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r96",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 88",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r97",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 89",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r98",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 90",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r99",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 91",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r100",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 92",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r101",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 93",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r102",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 94",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r103",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 95",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r104",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 96",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r105",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 97",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r106",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 98",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r107",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 99",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r108",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 100",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r109",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 101",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r110",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 102",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r111",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 103",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r112",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 104",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r113",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 105",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r114",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 106",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r115",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 107",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r116",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 108",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r117",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 109",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r118",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 110",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r119",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 111",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r120",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 112",
  },
  {
    parentId: "r4",
    // SectorCode: "5",
    id: "r121",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 113",
  },
  {
    parentId: "r6",
    // SectorCode: "6",
    id: "r122",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 114",
  },
  {
    parentId: "r6",
    // SectorCode: "6",
    id: "r123",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 115",
  },
  {
    parentId: "r6",
    // SectorCode: "6",
    id: "r124",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 116",
  },
  {
    parentId: "r6",
    // SectorCode: "6",
    id: "r125",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 117",
  },
  {
    parentId: "r6",
    // SectorCode: "6",
    id: "r126",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 118",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r127",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 119",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r128",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 120",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r129",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 121",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r130",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 122",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r131",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 123",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r132",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 124",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r133",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 125",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r134",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 126",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r135",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 127",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r136",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 128",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r137",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 129",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r138",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 130",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r139",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 131",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r140",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 132",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r141",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 133",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r142",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 134",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r143",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 135",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r144",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 136",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r145",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 137",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r146",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 138",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r147",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 139",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r148",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 140",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r149",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 141",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r150",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 142",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r151",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 143",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r152",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 144",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r153",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 145",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r154",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 146",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r155",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 147",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r156",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 148",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r157",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 149",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r158",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 150",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r159",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 151",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r160",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 152",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r161",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 153",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r162",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 154",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r163",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 155",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r164",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 156",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r165",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 157",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r166",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 158",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r167",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 159",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r168",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 160",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r169",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 161",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r170",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 162",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r171",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 163",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r172",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 164",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r173",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 165",
  },
  {
    parentId: "r5",
    // SectorCode: "8",
    id: "r174",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 166",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r175",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 167",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r176",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 168",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r177",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 169",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r178",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 170",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r179",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 171",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r180",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 172",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r181",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 173",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r182",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 174",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r183",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 175",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r184",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 176",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r185",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 177",
  },
  {
    parentId: 11,
    // SectorCode: "9",
    id: "r186",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 178",
  },
  {
    parentId: 12,
    // SectorCode: "10",
    id: "r187",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 179",
  },
  {
    parentId: 12,
    // SectorCode: "10",
    id: "r188",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 180",
  },
  {
    parentId: 12,
    // SectorCode: "10",
    id: "r189",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 181",
  },
  {
    parentId: 12,
    // SectorCode: "10",
    id: "r190",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 182",
  },
  {
    parentId: 12,
    // SectorCode: "10",
    id: "r191",
    // NClients: 0,
    // TableStatus: 0,
    name: "Mesa 183",
  },
];

let events = [
  {
    RowNumber: 1,
    TotalRows: 39,
    id: 1,
    title: "TABLERES106100",
    start: "2021-06-30 13:00:00",
    end: "2021-06-30 14:30:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 101883,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "wumbe  cunha",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [5],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r9",
  },
  {
    RowNumber: 2,
    TotalRows: 39,
    id: 110129,
    title: "TABLERES106156",
    start: "2021-06-22 13:00:00",
    end: "2021-06-22 14:30:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 0,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "Ana  Fonseca",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [292],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r10",
  },
  {
    RowNumber: 2,
    TotalRows: 39,
    id: 110129,
    title: "TABLERES106156",
    start: "2021-06-22 13:00:00",
    end: "2021-06-22 14:30:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 0,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "Ana  Fonseca",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [292],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r10",
  },
  {
    RowNumber: 3,
    TotalRows: 39,
    id: 110109,
    title: "TABLERES106136",
    start: "2021-06-22 13:00:00",
    end: "2021-06-22 14:30:00",
    Status: 10,
    Pax: 2,
    Children: 0,
    ContactId: 101910,
    SectorId: 11,
    Notes: "teste notas",
    GuestName: "Biscaia  Fraga ",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [420],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Esplanada",
    resourceId: "r11",
  },
  {
    RowNumber: 4,
    TotalRows: 39,
    id: 109574,
    title: "TABLERES105601",
    start: "2021-06-22 13:00:00",
    end: "2021-06-22 14:30:00",
    Status: 10,
    Pax: 2,
    Children: 0,
    ContactId: 0,
    SectorId: 11,
    Notes: "teste notas",
    GuestName: "Arqta  Pinto-Coelho",
    GuestEmail1: "testeemail@teste.ptmj.docs3@gmail.com",
    GuestPhone1: "+351999999999",
    TableIds: [411],
    GuestLanguageCultureCode: "en-US",
    StayTime: 90,
    SectorName: "Esplanada",
    resourceId: "r12",
  },
  {
    RowNumber: 5,
    TotalRows: 39,
    id: 110135,
    title: "TABLERES106162",
    start: "2021-06-22 13:30:00",
    end: "2021-06-22 15:00:00",
    Status: 10,
    Pax: 2,
    Children: 0,
    ContactId: 101920,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Alexandre  Gouveia",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [4],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r13",
  },
  {
    RowNumber: 6,
    TotalRows: 39,
    id: 109543,
    title: "TABLERES105570",
    start: "2021-06-22 13:30:00",
    end: "2021-06-22 15:00:00",
    Status: 0,
    Pax: 4,
    Children: 0,
    ContactId: 0,
    SectorId: 11,
    Notes: "teste notas",
    GuestName: "Dra. Sofia  Correia Barros",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [430, 431],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Esplanada",
    resourceId: "r14",
  },
  {
    RowNumber: 7,
    TotalRows: 39,
    id: 109774,
    title: "TABLERES105801",
    start: "2021-06-22 16:30:00",
    end: "2021-06-22 18:00:00",
    Status: 0,
    Pax: 3,
    Children: 0,
    ContactId: 101696,
    SectorId: 5,
    Notes: "teste notas",
    GuestName: "Natasha  Lytton",
    GuestEmail1: "testeemail@teste.ptnatasha.lytton@gmail.com",
    GuestPhone1: "+351999999999",
    TableIds: [150, 157],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Bar Lounge",
    resourceId: "r15",
  },
  {
    RowNumber: 8,
    TotalRows: 39,
    id: 110096,
    title: "TABLERES106123",
    start: "2021-06-22 19:00:00",
    end: "2021-06-22 20:30:00",
    Status: 0,
    Pax: 8,
    Children: 0,
    ContactId: 0,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Gurjievi  Gujiko",
    GuestEmail1: "testeemail@teste.ptggurjiev@live.com",
    GuestPhone1: "+351999999999",
    TableIds: [8, 19],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r16",
  },
  {
    RowNumber: 9,
    TotalRows: 39,
    id: 110090,
    title: "TABLERES106117",
    start: "2021-06-22 19:00:00",
    end: "2021-06-22 20:30:00",
    Status: 0,
    Pax: 6,
    Children: 0,
    ContactId: 101900,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "Juan  Lui",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [244, 245, 232],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r17",
  },
  {
    RowNumber: 11,
    TotalRows: 39,
    id: 109988,
    title: "TABLERES106015",
    start: "2021-06-22 19:30:00",
    end: "2021-06-22 21:00:00",
    Status: 0,
    Pax: 8,
    Children: 0,
    ContactId: 0,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "João  Leitão",
    GuestEmail1: "testeemail@teste.ptjleitaomd@gmail.com",
    GuestPhone1: "+351999999999",
    TableIds: [250, 252, 253, 243],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r18",
  },
  {
    RowNumber: 12,
    TotalRows: 39,
    id: 110172,
    title: "TABLERES106199",
    start: "2021-06-22 19:30:00",
    end: "2021-06-22 21:00:00",
    Status: 3,
    Pax: 8,
    Children: 0,
    ContactId: 101940,
    SectorId: 10,
    Notes: "teste notas",
    GuestName: "Liliana  Pina",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [118, 117],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Pool Bar",
    resourceId: "r19",
  },
  {
    RowNumber: 13,
    TotalRows: 39,
    id: 109944,
    title: "TABLERES105971",
    start: "2021-06-22 20:00:00",
    end: "2021-06-22 21:30:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 101800,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Lea  Antoun",
    GuestEmail1: "testeemail@teste.ptleaantoun@hotmail.fr",
    GuestPhone1: "+351999999999",
    TableIds: [5],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r20",
  },
  {
    RowNumber: 14,
    TotalRows: 39,
    id: 110133,
    title: "TABLERES106160",
    start: "2021-06-22 20:00:00",
    end: "2021-06-22 21:30:00",
    Status: 3,
    Pax: 4,
    Children: 0,
    ContactId: 0,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Rafaela  Monnerat",
    GuestEmail1: "testeemail@teste.ptfarfa96.rm@gmail.com",
    GuestPhone1: "+351999999999",
    TableIds: [1, 35],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r21",
  },
  {
    RowNumber: 15,
    TotalRows: 39,
    id: 110118,
    title: "TABLERES106145",
    start: "2021-06-22 20:00:00",
    end: "2021-06-22 21:30:00",
    Status: 0,
    Pax: 4,
    Children: 0,
    ContactId: 0,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Marine  .",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [10],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r22",
  },
  {
    RowNumber: 16,
    TotalRows: 39,
    id: 110137,
    title: "TABLERES106164",
    start: "2021-06-22 20:00:00",
    end: "2021-06-22 21:30:00",
    Status: 0,
    Pax: 4,
    Children: 0,
    ContactId: 0,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Teresa  Mesquita",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [9],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r23",
  },
  {
    RowNumber: 17,
    TotalRows: 39,
    id: 110171,
    title: "TABLERES106198",
    start: "2021-06-22 20:00:00",
    end: "2021-06-22 21:30:00",
    Status: 3,
    Pax: 3,
    Children: 0,
    ContactId: 101939,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "Maria Helena    Cordeiro",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [248, 247],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Louge",
    resourceId: "r24",
  },
  {
    RowNumber: 18,
    TotalRows: 39,
    id: 110156,
    title: "TABLERES106183",
    start: "2021-06-22 20:00:00",
    end: "2021-06-22 21:30:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 0,
    SectorId: 11,
    Notes: "teste notas",
    GuestName: "Rita  Catarino",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [411],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Esplanada",
    resourceId: "r25",
  },
  {
    RowNumber: 19,
    TotalRows: 39,
    id: 110038,
    title: "TABLERES106065",
    start: "2021-06-22 20:30:00",
    end: "2021-06-22 22:00:00",
    Status: 0,
    Pax: 7,
    Children: 0,
    ContactId: 101856,
    SectorId: 11,
    Notes: "teste notas",
    GuestName: "Carlo  Darouin",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [430, 440, 431, 441],
    GuestLanguageCultureCode: "en-US",
    StayTime: 90,
    SectorName: "Esplanada",
    resourceId: "r26",
  },
  {
    RowNumber: 20,
    TotalRows: 39,
    id: 109470,
    title: "TABLERES105497",
    start: "2021-06-23 12:30:00",
    end: "2021-06-23 14:00:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 0,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Sónia  .",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [3],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r27",
  },
  {
    RowNumber: 21,
    TotalRows: 39,
    id: 110040,
    title: "TABLERES106067",
    start: "2021-06-23 12:30:00",
    end: "2021-06-23 14:00:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 101858,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Sónia   .",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [4],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r28",
  },
  {
    RowNumber: 23,
    TotalRows: 39,
    id: 110127,
    title: "TABLERES106154",
    start: "2021-06-23 13:00:00",
    end: "2021-06-23 14:30:00",
    Status: 0,
    Pax: 4,
    Children: 0,
    ContactId: 0,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "Paulo  Candeias",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [220, 221],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r29",
  },
  {
    RowNumber: 24,
    TotalRows: 39,
    id: 107854,
    title: "TABLERES103881",
    start: "2021-06-23 13:30:00",
    end: "2021-06-23 15:00:00",
    Status: 3,
    Pax: 12,
    Children: 0,
    ContactId: 100232,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Antonieta  Cunha",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r30",
  },
  {
    RowNumber: 25,
    TotalRows: 39,
    id: 110050,
    title: "TABLERES106077",
    start: "2021-06-23 13:30:00",
    end: "2021-06-23 15:00:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 101868,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Mariana  Carvalho",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [5],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r31",
  },
  {
    RowNumber: 26,
    TotalRows: 39,
    id: 109444,
    title: "TABLERES105471",
    start: "2021-06-23 13:30:00",
    end: "2021-06-23 15:00:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 0,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "Marcia  Silva",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [244, 245],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r32",
  },
  {
    RowNumber: 27,
    TotalRows: 39,
    id: 109769,
    title: "TABLERES105796",
    start: "2021-06-23 17:00:00",
    end: "2021-06-23 18:30:00",
    Status: 6,
    Pax: 2,
    Children: 0,
    ContactId: 101692,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Daniel   Brandhofer ",
    GuestEmail1: "testeemail@teste.ptdaniel.brandhofer@gmail.com",
    GuestPhone1: "+351999999999",
    TableIds: [],
    GuestLanguageCultureCode: "en-US",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r33",
  },
  {
    RowNumber: 28,
    TotalRows: 39,
    id: 109985,
    title: "TABLERES106012",
    start: "2021-06-23 19:00:00",
    end: "2021-06-23 20:30:00",
    Status: 0,
    Pax: 12,
    Children: 0,
    ContactId: 0,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Dania  Macamba",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [8, 19],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r34",
  },
  {
    RowNumber: 29,
    TotalRows: 39,
    id: 109740,
    title: "TABLERES105767",
    start: "2021-06-23 19:00:00",
    end: "2021-06-23 20:30:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 101674,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Alexis  Goosdeel",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [4],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r35",
  },
  {
    RowNumber: 30,
    TotalRows: 39,
    id: 109906,
    title: "TABLERES105933",
    start: "2021-06-23 19:30:00",
    end: "2021-06-23 21:00:00",
    Status: 0,
    Pax: 6,
    Children: 0,
    ContactId: 101778,
    SectorId: 5,
    Notes: "teste notas",
    GuestName: "Ricardo  Alves",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [132, 133, 134],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Bar Lounge",
    resourceId: "r36",
  },
  {
    RowNumber: 31,
    TotalRows: 39,
    id: 110161,
    title: "TABLERES106188",
    start: "2021-06-23 19:30:00",
    end: "2021-06-23 21:00:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 101932,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "Nuno Ferreira  Antunes",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [292],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r37",
  },
  {
    RowNumber: 32,
    TotalRows: 39,
    id: 110173,
    title: "TABLERES106200",
    start: "2021-06-23 19:30:00",
    end: "2021-06-23 21:00:00",
    Status: 0,
    Pax: 8,
    Children: 0,
    ContactId: 101941,
    SectorId: 10,
    Notes: "teste notas",
    GuestName: "Liliana  Pina",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [118, 117],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Pool Bar",
    resourceId: "r38",
  },
  {
    RowNumber: 33,
    TotalRows: 39,
    id: 110150,
    title: "TABLERES106177",
    start: "2021-06-23 20:00:00",
    end: "2021-06-23 21:30:00",
    Status: 0,
    Pax: 4,
    Children: 0,
    ContactId: 101926,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Suzete  Marques",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [9],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r39",
  },
  {
    RowNumber: 34,
    TotalRows: 39,
    id: 109706,
    title: "TABLERES105733",
    start: "2021-06-23 20:00:00",
    end: "2021-06-23 21:30:00",
    Status: 6,
    Pax: 7,
    Children: 0,
    ContactId: 101650,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Rita  Ascenso",
    GuestEmail1: "testeemail@teste.ptritascenso@hotmail.com",
    GuestPhone1: "+351999999999",
    TableIds: [],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r40",
  },
  {
    RowNumber: 35,
    TotalRows: 39,
    id: 109707,
    title: "TABLERES105734",
    start: "2021-06-23 20:00:00",
    end: "2021-06-23 21:30:00",
    Status: 0,
    Pax: 7,
    Children: 0,
    ContactId: 101650,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "Rita  Ascenso",
    GuestEmail1: "testeemail@teste.ptritascenso@hotmail.com",
    GuestPhone1: "+351999999999",
    TableIds: [250, 252, 253],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r41",
  },
  {
    RowNumber: 36,
    TotalRows: 39,
    id: 109905,
    title: "TABLERES105932",
    start: "2021-06-23 20:00:00",
    end: "2021-06-23 21:30:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 0,
    SectorId: 11,
    Notes: "teste notas",
    GuestName: "Eduardo  Mourador",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [411],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Esplanada",
    resourceId: "r42",
  },
  {
    RowNumber: 37,
    TotalRows: 39,
    id: 110151,
    title: "TABLERES106178",
    start: "2021-06-23 20:15:00",
    end: "2021-06-23 21:45:00",
    Status: 0,
    Pax: 4,
    Children: 0,
    ContactId: 101927,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Suzete  Marques",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [10],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r43",
  },
  {
    RowNumber: 38,
    TotalRows: 39,
    id: 110141,
    title: "TABLERES106168",
    start: "2021-06-23 20:30:00",
    end: "2021-06-23 22:00:00",
    Status: 0,
    Pax: 2,
    Children: 0,
    ContactId: 101922,
    SectorId: 4,
    Notes: "teste notas",
    GuestName: "Sonia   Sousa ",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [5],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante",
    resourceId: "r44",
  },
  {
    RowNumber: 39,
    TotalRows: 39,
    id: 110071,
    title: "TABLERES106098",
    start: "2021-06-23 20:30:00",
    end: "2021-06-23 22:00:00",
    Status: 0,
    Pax: 5,
    Children: 0,
    ContactId: 101881,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "antonio   almeida",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [220, 221],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r45",
  },
  {
    RowNumber: 40,
    TotalRows: 40,
    id: 110072,
    title: "TABLERES106099",
    start: "2021-06-23 20:30:00",
    end: "2021-06-23 22:00:00",
    Status: 0,
    Pax: 5,
    Children: 0,
    ContactId: 101881,
    SectorId: 7,
    Notes: "teste notas",
    GuestName: "antonio   almeida",
    GuestEmail1: "testeemail@teste.pt",
    GuestPhone1: "+351999999999",
    TableIds: [220, 221],
    GuestLanguageCultureCode: "pt-PT",
    StayTime: 90,
    SectorName: "Restaurante Lounge",
    resourceId: "r45",
  },
];
// End of Data

class calendar extends Component {
  options = [
    { value: "Cafetaria", label: "Cafetaria" },
    { value: "Restaurante", label: "Restaurante" },
    { value: "Bar Lounge", label: "Bar Lounge" },
    { value: "Take-Away Kiosk", label: "Take-Away Kiosk" },
    { value: "Restaurant Lounge", label: "Restaurant Lounge" },
    { value: "Pool Bar", label: "Pool Bar" },
    { value: "Esplanada", label: "Esplanada" },
    { value: "Grab & GO", label: "Grab & GO" },
  ];

  constructor(props) {
    super(props);
    moment.locale("pt");
    let schedulerData = new SchedulerData(
      moment().format(DATE_FORMAT),
      ViewTypes.Day,
      false,
      false,
      {
        views: [
          {
            viewName: "Day",
            viewType: ViewTypes.Day,
            showAgenda: false,
            isEventPerspective: false,
          },
          {
            viewName: "Month",
            viewType: ViewTypes.Month,
            showAgenda: false,
            isEventPerspective: false,
          },
          {
            viewName: "Agenda",
            viewType: ViewTypes.Month,
            showAgenda: true,
            isEventPerspective: false,
          },
        ],
        dayStartFrom: 0,
        dayStopTo: 23,
        weekCellWidth: "24%",
        monthCellWidth: 160,
        quarterCellWidth: 160,
        yearCellWidth: 160,
        customCellWidth: 60,
        eventItemHeight: 88,
        eventItemLineHeight: 96,
        minuteStep: 30,
        checkConflict: true,
      }
    );
    schedulerData.localeMoment.locale("he-il");
    schedulerData.setResources(resources);
    schedulerData.setEvents(events);
    this.state = {
      viewModel: schedulerData,
    };
  }

  nonAgendaCellHeaderTemplateResolver = (
    schedulerData,
    item,
    formattedDateItems,
    style
  ) => {
    let datetime = schedulerData.localeMoment(item.time);
    let isCurrentDate = false;

    if (schedulerData.viewType === ViewTypes.Day) {
      isCurrentDate = datetime.isSame(new Date(), "hour");
    } else {
      isCurrentDate = datetime.isSame(new Date(), "day");
    }

    if (isCurrentDate) {
      style.backgroundColor = "#118dea";
      style.color = "white";
    }

    return (
      <th key={item.time} className={`header3-text`} style={style}>
        {formattedDateItems.map((formattedItem, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: formattedItem.replace(/[0-9]/g, "<b>$&</b>"),
            }}
          />
        ))}
      </th>
    );
  };
  state = {
    selectedOption: null,
  };

  state = {
    disabled: false,
    readOnly: false,
    value: 5,
  };

  onChange = (value) => {
    console.log("onChange:", value);
    this.setState({ value });
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
    });
  };

  render() {
    const { viewModel } = this.state;
    let leftCustomHeader = (
      <div>
        <Row type="flex" align="middle">
          <a href="From">From&nbsp;</a>
          <NumericInput width={2} min={0} max={23} value={0} />
          <a href="to">&nbsp;to&nbsp;</a>
          <NumericInput min={0} max={23} value={23} />
        </Row>
      </div>
    );
    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center" }}>Table Booking Manager (Alpha)</h3>
          <Scheduler
            schedulerData={viewModel}
            prevClick={this.prevClick}
            nextClick={this.nextClick}
            onSelectDate={this.onSelectDate}
            onSelectHour={this.onSelectHour}
            onViewChange={this.onViewChange}
            eventItemClick={this.eventItemPopoverTemplateResolver}
            // viewEventClick={this.ops1}
            // viewEventText="Ops 1"
            // viewEvent2Text="Ops 2"
            // viewEvent2Click={this.ops2}
            updateEventStart={this.updateEventStart}
            updateEventEnd={this.updateEventEnd}
            moveEvent={this.moveEvent}
            newEvent={this.newEvent}
            eventItemPopoverTemplateResolver={
              this.eventItemPopoverTemplateResolver
            }
            onScrollLeft={this.onScrollLeft}
            onScrollRight={this.onScrollRight}
            onScrollTop={this.onScrollTop}
            onScrollBottom={this.onScrollBottom}
            conflictOccurred={this.conflictOccurred}
            leftCustomHeader={leftCustomHeader}
            nonAgendaCellHeaderTemplateResolver={
              this.nonAgendaCellHeaderTemplateResolver
            }
            toggleExpandFunc={this.toggleExpandFunc}
          />
          <Select
            defaultValue={[]}
            closeMenuOnSelect={false}
            isMulti
            name="Filters"
            options={this.options}
            className="basic-multi-select"
            classNamePrefix="select"
            value={this.state.select2}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }

  prevClick = (schedulerData) => {
    schedulerData.prev();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  nextClick = (schedulerData) => {
    schedulerData.next();
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective
    );
    schedulerData.config.customCellWidth =
      view.viewType === ViewTypes.Custom ? 30 : 80;
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  eventClicked = (schedulerData, event) => {
    alert(
      `You just clicked an event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  ops1 = (schedulerData, event) => {
    alert(
      `You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  ops2 = (schedulerData, event) => {
    alert(
      `You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`
    );
  };

  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    if (
      window.confirm(
        `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
      )
    ) {
      let newFreshId = 0;
      schedulerData.events.forEach((item) => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      let newEvent = {
        id: newFreshId,
        title: "New event you just created",
        start: start,
        end: end,
        resourceId: slotId,
        bgColor: "blue",
      };
      schedulerData.addEvent(newEvent);
      this.setState({
        viewModel: schedulerData,
      });
    }
  };

  updateEventStart = (schedulerData, event, newStart) => {
    if (
      window.confirm(
        `Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`
      )
    ) {
      schedulerData.updateEventStart(event, newStart);
    }
    this.setState({
      viewModel: schedulerData,
    });
  };

  updateEventEnd = (schedulerData, event, newEnd) => {
    if (
      window.confirm(
        `Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`
      )
    ) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    this.setState({
      viewModel: schedulerData,
    });
  };

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    if (
      window.confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      this.setState({
        viewModel: schedulerData,
      });
    }
  };

  onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.next();
      schedulerData.setEvents(events);
      this.setState({
        viewModel: schedulerData,
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      schedulerData.setEvents(events);
      this.setState({
        viewModel: schedulerData,
      });

      schedulerContent.scrollLeft = 10;
    }
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({
      viewModel: schedulerData,
    });
  };

  eventItemPopoverTemplateResolver = (
    schedulerData,
    eventItem,
    title,
    start,
    end,
    statusColor,
    GuestName,
    GuestPhone1,
    GuestEmail1
  ) => {
    return (
      // <React.Fragment>
      //     <h3>{title}</h3>
      //     <h5>{start.format("HH:mm")} - {end.format("HH:mm")}</h5>
      //     <img src="./icons8-ticket-96.png" />
      // </React.Fragment>
      <div style={{ width: "300px" }}>
        <Row type="flex" align="middle">
          <Col span={2}>
            <div
              className="status-dot"
              style={{ backgroundColor: statusColor }}
            />
          </Col>
          <Col span={22} className="overflow-text">
            <span className="header2-text" title={title}>
              {title}
            </span>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col span={2}>
            <div />
          </Col>
          <Col span={22}>
            <span className="header1-text">
              {start.format("HH:mm")} - {end.format("HH:mm")}
            </span>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col span={2}></Col>
          <Col span={22}>
            <span className="header2-text">
              Guest Name: {eventItem.GuestName}
            </span>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col span={2}></Col>
          <Col span={22}>
            <span className="header2-text">
              Guest Phone: {eventItem.GuestPhone1}
            </span>
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col span={2}></Col>
          <Col span={22}>
            <span className="header2-text">
              Guest Email: {eventItem.GuestEmail1}
            </span>
          </Col>
        </Row>
      </div>
    );
  };

  conflictOccurred = (schedulerData, action, event) => {
    alert("Reservations cannot be overlapped");
  };
}

export default DragDropContext(HTML5Backend)(calendar);
