import {
  AdministrationSvg,
  AuditTrailSvg,
  CustomersSvg,
  DashboardSvg,
  KYCSvg,
  ReportsSvg,
  RequestSvg,
  SettingsSVg,
  TasksSvg,
  UsersSvg,
} from "../assets/svg";

export const menuItems = [
  { label: "Dashboard", icon: <DashboardSvg />, path: "/" },
  { label: "Request", icon: <RequestSvg />, path: "/request" },
  { label: "KYC", icon: <KYCSvg />, path: "/kyc" },
  { label: "Reports", icon: <ReportsSvg />, path: "/reports" },
  { label: "Tasks", icon: <TasksSvg />, path: "/tasks" },
  { label: "Audit Trail", icon: <AuditTrailSvg />, path: "/audit-trail" },
  { label: "Customers", icon: <CustomersSvg />, path: "/customers" },
  { label: "Users", icon: <UsersSvg />, path: "/users" },
  { label: "Settings", icon: <SettingsSVg />, path: "/settings" },
  {
    label: "Administration",
    icon: <AdministrationSvg />,
    path: "/administration",
  },
];

