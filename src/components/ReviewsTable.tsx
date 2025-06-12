import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Review, ReviewStatus } from "@/types/admin";

const ReviewsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Mock data
  const reviews: Review[] = [
    {
      id: "REV-001",
      patientName: "Анна Иванова",
      doctorName: "Д-р Смирнов А.В.",
      reviewText:
        "Отличный врач, очень внимательный и профессиональный. Консультация прошла на высшем уровне, получила исчерпывающие ответы на все вопросы.",
      rating: 5,
      date: "2024-01-15",
      status: ReviewStatus.APPROVED,
      consultationId: "CONS-001",
    },
    {
      id: "REV-002",
      patientName: "Петр Петров",
      doctorName: "Д-р Козлова М.И.",
      reviewText:
        "Доктор очень компетентный, но консультация длилась дольше запланированного времени.",
      rating: 4,
      date: "2024-01-14",
      status: ReviewStatus.PENDING,
      consultationId: "CONS-002",
    },
    {
      id: "REV-003",
      patientName: "Мария Сидорова",
      doctorName: "Д-р Волков Д.С.",
      reviewText:
        "Неудовлетворительная консультация, врач был невнимателен к моим жалобам.",
      rating: 2,
      date: "2024-01-13",
      status: ReviewStatus.PENDING,
      consultationId: "CONS-003",
    },
    {
      id: "REV-004",
      patientName: "Сергей Николаев",
      doctorName: "Д-р Белова Е.А.",
      reviewText:
        "Прекрасный специалист! Быстро поставила диагноз и назначила эффективное лечение.",
      rating: 5,
      date: "2024-01-12",
      status: ReviewStatus.APPROVED,
      consultationId: "CONS-004",
    },
  ];

  const getStatusBadge = (status: ReviewStatus) => {
    switch (status) {
      case ReviewStatus.APPROVED:
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            Одобрен
          </Badge>
        );
      case ReviewStatus.PENDING:
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            На модерации
          </Badge>
        );
      case ReviewStatus.REJECTED:
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            Отклонен
          </Badge>
        );
      default:
        return null;
    }
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  const truncateText = (text: string, maxLength: number = 80) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch =
      review.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.reviewText.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || review.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Управление отзывами</span>
          <Badge variant="outline" className="ml-2">
            {filteredReviews.length} отзывов
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Поиск по пациенту, врачу или тексту отзыва..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Статус" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все статусы</SelectItem>
              <SelectItem value="pending">На модерации</SelectItem>
              <SelectItem value="approved">Одобренные</SelectItem>
              <SelectItem value="rejected">Отклоненные</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID отзыва</TableHead>
                <TableHead>Пациент</TableHead>
                <TableHead>Врач</TableHead>
                <TableHead>Текст отзыва</TableHead>
                <TableHead>Рейтинг</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell className="font-medium">{review.id}</TableCell>
                  <TableCell>{review.patientName}</TableCell>
                  <TableCell>{review.doctorName}</TableCell>
                  <TableCell className="max-w-xs">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="p-0 h-auto text-left justify-start"
                        >
                          {truncateText(review.reviewText)}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Отзыв {review.id}</DialogTitle>
                          <DialogDescription>
                            Пациент: {review.patientName} | Врач:{" "}
                            {review.doctorName}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {review.reviewText}
                          </p>
                          <div className="flex items-center mt-4 pt-4 border-t">
                            <div className="flex items-center space-x-1">
                              {getRatingStars(review.rating)}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              {review.rating} из 5
                            </span>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      {getRatingStars(review.rating)}
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(review.date).toLocaleDateString("ru-RU")}
                  </TableCell>
                  <TableCell>{getStatusBadge(review.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {review.status === ReviewStatus.PENDING && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-green-600 hover:text-green-700"
                          >
                            <Icon name="Check" size={16} />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </>
                      )}
                      <Button size="sm" variant="outline">
                        <Icon name="Edit" size={16} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700"
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="MessageSquare"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <p className="text-gray-500">Отзывы не найдены</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewsTable;
