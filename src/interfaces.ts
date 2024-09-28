// src/interfaces.ts

export interface AuthFormData {
  email: string;
  password: string;
}

export interface AuthProps {
  onSubmit: (formData: AuthFormData) => void;
}