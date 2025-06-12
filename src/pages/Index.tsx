import React from "react";
import AdminLayout from "@/components/AdminLayout";
import DashboardStats from "@/components/DashboardStats";
import ReviewsTable from "@/components/ReviewsTable";
import AnalyticsChart from "@/components/AnalyticsChart";

const Index = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Statistics Cards */}
        <DashboardStats />

        {/* Analytics Chart */}
        <div className="grid gap-6 md:grid-cols-3">
          <AnalyticsChart />

          {/* Quick Actions */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-4">Быстрые действия</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <div className="font-medium">Новый врач</div>
                  <div className="text-sm text-gray-600">
                    Добавить специалиста
                  </div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <div className="font-medium">Экспорт данных</div>
                  <div className="text-sm text-gray-600">Выгрузить отчет</div>
                </button>
                <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <div className="font-medium">Настройки</div>
                  <div className="text-sm text-gray-600">
                    Системные параметры
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Management Table */}
        <ReviewsTable />
      </div>
    </AdminLayout>
  );
};

export default Index;
