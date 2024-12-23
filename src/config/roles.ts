export const ROLES = {
  ADMIN: 'admin',
  HEAD_TEACHER: 'head_teacher',
  DIRECTOR: 'director',
  PARENT: 'parent',
  EXAM_OFFICER: 'exam_officer',
  TEACHER: 'teacher'
} as const;

export type Role = typeof ROLES[keyof typeof ROLES];

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: ['*'],
  [ROLES.HEAD_TEACHER]: [
    'view_teachers',
    'manage_teachers',
    'view_classes',
    'manage_classes',
    'approve_results',
    'view_attendance',
    'manage_lesson_plans'
  ],
  [ROLES.DIRECTOR]: [
    'view_reports',
    'view_performance',
    'manage_settings'
  ],
  [ROLES.PARENT]: [
    'view_child_results',
    'view_child_attendance',
    'view_child_performance'
  ],
  [ROLES.EXAM_OFFICER]: [
    'manage_results',
    'manage_exams',
    'generate_reports',
    'validate_results'
  ],
  [ROLES.TEACHER]: [
    'manage_assigned_classes',
    'manage_attendance',
    'manage_results',
    'create_lesson_plans'
  ]
} as const;