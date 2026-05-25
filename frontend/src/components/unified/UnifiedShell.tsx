'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { featureNav, primaryNav } from '@/lib/unifiedApp';
import { useAuth } from '@/components/providers/AuthProvider';

type UnifiedShellProps = {
  title: string;
  subtitle: string;
  eyebrow: string;
  children: React.ReactNode;
};

export default function UnifiedShell({ title, subtitle, eyebrow, children }: UnifiedShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { ready, user, logout } = useAuth();

  const isActive = (href: string) => pathname === href || (href !== '/dashboard' && pathname?.startsWith(`${href}/`));

  return (
    <div className="shell">
      <aside className="sidebar">
        <div>
          <div className="pill">Dental Suite</div>
          <h1>Dental Orthodontic Operations</h1>
          <p>One login, one dashboard, and one feature map for dental orthodontic operations operations, approvals, audit, documents, and AI.</p>
        </div>

        <div className="section-label">Platform</div>
        <nav className="nav-list">
          {primaryNav.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className={`nav-item${active ? ' active' : ''}`}>
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="section-label">Features</div>
        <nav className="nav-list">
          {featureNav.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className={`nav-item${active ? ' active' : ''}`}>
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="user-box">
          <div>
            <div style={{ fontWeight: 700 }}>{user ? `${user.firstName} ${user.lastName}` : 'Dental Operator'}</div>
            <div className="muted" style={{ fontSize: 13 }}>{user?.email || 'admin@dental-orthodontic-operations.local'}</div>
            <div className="muted" style={{ fontSize: 12, textTransform: 'capitalize' }}>{user?.role || 'admin'}</div>
          </div>
          <button
            className="button"
            onClick={async () => {
              await logout();
              router.push('/login');
            }}
          >
            Sign out
          </button>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          {ready ? (
            <div style={{ marginTop: 12 }} className="pill">
              {user ? `${user.firstName} ${user.lastName} · ${user.role} · Dental Suite Session Active` : 'Loading session'}
            </div>
          ) : null}
        </header>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
