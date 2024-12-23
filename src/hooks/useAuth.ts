import { useState } from 'react';
import { User } from '../types/auth';
import { Role, ROLES } from '../config/roles';

// Mock users for development
const MOCK_USERS: Record<Role, User> = {
  [ROLES.ADMIN]: {
    id: '1',
    name: 'Admin User',
    email: 'admin@noblepaths.com',
    role: ROLES.ADMIN
  },
  [ROLES.HEAD_TEACHER]: {
    id: '2',
    name: 'Head Teacher',
    email: 'head@noblepaths.com',
    role: ROLES.HEAD_TEACHER
  },
  [ROLES.DIRECTOR]: {
    id: '3',
    name: 'School Director',
    email: 'director@noblepaths.com',
    role: ROLES.DIRECTOR
  },
  [ROLES.PARENT]: {
    id: '4',
    name: 'Parent User',
    email: 'parent@noblepaths.com',
    role: ROLES.PARENT
  },
  [ROLES.EXAM_OFFICER]: {
    id: '5',
    name: 'Exam Officer',
    email: 'exams@noblepaths.com',
    role: ROLES.EXAM_OFFICER
  },
  [ROLES.TEACHER]: {
    id: '6',
    name: 'Teacher User',
    email: 'teacher@noblepaths.com',
    role: ROLES.TEACHER,
    subjects: ['Mathematics', 'Physics'],
    classes: ['Class 1A', 'Class 1B']
  }
};

export function useAuth() {
  const [authState, setAuthState] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: false
  });

  const login = async (role: Role) => {
    const user = MOCK_USERS[role];
    setAuthState({
      user,
      isAuthenticated: true,
      isLoading: false
    });
  };

  const logout = async () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  };

  return {
    ...authState,
    login,
    logout
  };
}