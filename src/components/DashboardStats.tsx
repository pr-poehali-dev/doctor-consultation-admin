import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: "Всего консультаций",
      value: "2,847",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: "Calendar",
      color: "bg-blue-500",
    },
    {
      title: "Активные врачи",
      value: "156",
      change: "+3.2%",
      changeType: "positive" as const,
      icon: "UserCheck",
      color: "bg-green-500",
    },
    {
      title: "Пациенты",
      value: "8,924",
      change: "+18.1%",
      changeType: "positive" as const,
      icon: "Users",
      color: "bg-purple-500",
    },
    {
      title: "Доходы (месяц)",
      value: "1,284,750₽",
      change: "+9.8%",
      changeType: "positive" as const,
      icon: "TrendingUp",
      color: "bg-orange-500",
    },
    {
      title: "Средний рейтинг",
      value: "4.8",
      change: "+0.3",
      changeType: "positive" as const,
      icon: "Star",
      color: "bg-yellow-500",
    },
    {
      title: "Отзывы на модерации",
      value: "23",
      change: "-5",
      changeType: "negative" as const,
      icon: "MessageSquare",
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`${stat.color} p-2 rounded-md`}>
              <Icon name={stat.icon as any} size={16} className="text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="flex items-center mt-1">
              <Badge
                variant={
                  stat.changeType === "positive" ? "default" : "destructive"
                }
                className={`text-xs ${
                  stat.changeType === "positive"
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : "bg-red-100 text-red-800 hover:bg-red-100"
                }`}
              >
                {stat.changeType === "positive" ? "↗" : "↘"} {stat.change}
              </Badge>
              <span className="text-xs text-gray-500 ml-2">
                за последний месяц
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
