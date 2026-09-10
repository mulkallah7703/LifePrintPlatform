import type { AccessRole } from "./types";

const KEY = "basmat-hayah-role";

export function setAccessRole(role: AccessRole) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(KEY, role);
}

export function getAccessRole(): AccessRole | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(KEY);
  return value === "citizen" || value === "paramedic" ? value : null;
}
