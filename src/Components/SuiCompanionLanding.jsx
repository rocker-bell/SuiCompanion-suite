import React, { useState } from 'react';
import '../Styles/SuiCompanionLanding.css';

export default function Dashboard() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="dashboard-grid">
            {/* Connected Wallets Card */}
            <div className="card wallet-card">
              <div className="card-header">
                <div>
                  <div className="card-title">
                    <span className="icon">👛</span> Connected Wallets
                  </div>
                  <p className="card-subtitle">Manage your Sui wallets and view balances</p>
                </div>
                <button className="btn btn-primary">+ Add Wallet</button>
              </div>
              <div className="card-empty-state">
                <div className="empty-icon">🪪</div>
                <p>No wallets connected</p>
                <button className="btn btn-secondary">Connect Your First Wallet</button>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="card stats-card">
              <div className="card-header">
                <div>
                  <div className="card-title">Quick Stats</div>
                  <p className="card-subtitle">Your ecosystem activity overview</p>
                </div>
              </div>
              <div className="stats-list">
                <div className="stat-row">
                  <span>Installed Apps</span>
                  <span className="stat-value">0</span>
                </div>
                <div className="stat-row">
                  <span>Connected Wallets</span>
                  <span className="stat-value">0</span>
                </div>
                <div className="stat-row highlight">
                  <span>Total Balance</span>
                  <span className="stat-value">0.00 SUI</span>
                </div>
              </div>
            </div>

            {/* Installed Apps Card */}
            <div className="card apps-card">
              <div className="card-header">
                <div>
                  <div className="card-title">Installed Apps</div>
                  <p className="card-subtitle">Quick access to your ecosystem applications</p>
                </div>
                <button className="btn btn-secondary">Browse Marketplace</button>
              </div>
              <div className="card-empty-state">
                <div className="empty-icon">🏪</div>
                <p>No apps installed yet</p>
                <button className="btn btn-secondary">Explore Marketplace</button>
              </div>
            </div>
          </div>
        );
      case 'Marketplace':
        return (
          <div className="sample-content">
            <h2>Marketplace</h2>
            <p>Welcome to the Marketplace. This is empty sample text for the marketplace view.</p>
          </div>
        );
      case 'Developer Portal':
        return (
          <div className="sample-content">
            <h2>Developer Portal</h2>
            <p>Welcome to the Developer Portal. This is empty sample text for the developer view.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`app-container ${isNavOpen ? 'nav-open' : 'nav-closed'}`}>
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo">S</div>
          <span className="brand-name">SuiCompanion</span>
        </div>
        <div className="sidebar-section">
          <span className="section-label">Navigation</span>
          <nav className="nav-list">
            <button 
              className={`nav-item ${activeTab === 'Dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('Dashboard')}
            >
              <span className="nav-icon">🏠</span>
              <span className="nav-text">Dashboard</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'Marketplace' ? 'active' : ''}`}
              onClick={() => setActiveTab('Marketplace')}
            >
              <span className="nav-icon">🏪</span>
              <span className="nav-text">Marketplace</span>
            </button>
            <button 
              className={`nav-item ${activeTab === 'Developer Portal' ? 'active' : ''}`}
              onClick={() => setActiveTab('Developer Portal')}
            >
              <span className="nav-icon">💻</span>
              <span className="nav-text">Developer Portal</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Workspace Area */}
      <div className="main-wrapper">
        <header className="main-header">
          <button className="toggle-btn" onClick={toggleSidebar} aria-label="Toggle Navigation">
            📋
          </button>
          <h1 className="suite-title">SuiCompanion Suite</h1>
        </header>

        <main className="main-content">
          <div className="content-heading">
            <h2 className="view-title">{activeTab}</h2>
            {activeTab === 'Dashboard' && <p className="view-subtitle">Welcome to your Sui ecosystem hub</p>}
          </div>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}