import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AnalyticsChart: React.FC = () => {
  const data = [
    { month: "Янв", consultations: 180, reviews: 145 },
    { month: "Фев", consultations: 220, reviews: 180 },
    { month: "Мар", consultations: 190, reviews: 160 },
    { month: "Апр", consultations: 260, reviews: 210 },
    { month: "Май", consultations: 240, reviews: 195 },
    { month: "Июн", consultations: 290, reviews: 235 },
    { month: "Июл", consultations: 310, reviews: 250 },
    { month: "Авг", consultations: 280, reviews: 220 },
    { month: "Сен", consultations: 320, reviews: 260 },
    { month: "Окт", consultations: 350, reviews: 285 },
    { month: "Ноя", consultations: 330, reviews: 270 },
    { month: "Дек", consultations: 380, reviews: 310 },
  ];

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Динамика консультаций и отзывов</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
            <XAxis dataKey="month" className="text-gray-600" fontSize={12} />
            <YAxis className="text-gray-600" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="consultations"
              stroke="#9b87f5"
              strokeWidth={3}
              dot={{ fill: "#9b87f5", strokeWidth: 2, r: 4 }}
              name="Консультации"
            />
            <Line
              type="monotone"
              dataKey="reviews"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
              name="Отзывы"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AnalyticsChart;
