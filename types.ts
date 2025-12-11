import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link?: string;
  github?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
}

export interface Interest {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}