"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

export default function RadarVEFS({ data }) {
  return (
    <RadarChart width={500} height={400} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="variable" />
      <PolarRadiusAxis domain={[-6, 0]} />
      <Radar
        dataKey="impactoVANPercent"
        stroke="#00e5ff"
        fill="#00e5ff"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
