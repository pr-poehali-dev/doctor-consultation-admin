export interface Review {
  id: string;
  patientName: string;
  doctorName: string;
  reviewText: string;
  rating: number;
  date: string;
  status: ReviewStatus;
  consultationId: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  rating: number;
  consultationsCount: number;
  status: DoctorStatus;
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  registrationDate: string;
  consultationsCount: number;
}

export interface Consultation {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  status: ConsultationStatus;
  type: ConsultationType;
  duration: number;
}

export interface AdminStats {
  totalConsultations: number;
  activeDoctors: number;
  registeredPatients: number;
  monthlyRevenue: number;
  averageRating: number;
  pendingReviews: number;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  avatar?: string;
}

export enum ReviewStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

export enum DoctorStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  SUSPENDED = "suspended",
}

export enum ConsultationStatus {
  SCHEDULED = "scheduled",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export enum ConsultationType {
  VIDEO = "video",
  CHAT = "chat",
  PHONE = "phone",
}

export enum AdminRole {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  MODERATOR = "moderator",
}
