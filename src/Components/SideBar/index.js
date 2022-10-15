import React from "react";
import { ReactComponent as SwitchIcon } from "../../assests/icon/swtch.svg";
import { ReactComponent as DashboardIcon } from "../../assests/icon/dashboard.svg";
import { ReactComponent as UsersIcon } from "../../assests/icon/users.svg";
import { ReactComponent as GuarantorsIcon } from "../../assests/icon/garantor.svg";
import { ReactComponent as LoansIcon } from "../../assests/icon/loan.svg";
import { ReactComponent as DecisionIcon } from "../../assests/icon/decisions.svg";
import { ReactComponent as SavingsIcon } from "../../assests/icon/saving.svg";
import { ReactComponent as LoanreqIcon } from "../../assests/icon/loan-reqest.svg";
import { ReactComponent as WhitelistIcon } from "../../assests/icon/whitelist.svg";
import { ReactComponent as KarmaIcon } from "../../assests/icon/karma.svg";
import { ReactComponent as OrganizationIcon } from "../../assests/icon/organise.svg";
import { ReactComponent as LoanProIcon } from "../../assests/icon/loan-product.svg";
import { ReactComponent as SavingsProIcon } from "../../assests/icon/savings-product.svg";
import { ReactComponent as FeesCharIcon } from "../../assests/icon/fees.svg";
import { ReactComponent as TransactionsIcon } from "../../assests/icon/transaction.svg";
import { ReactComponent as ServicesIcon } from "../../assests/icon/services.svg";
import { ReactComponent as ServiceAccIcon } from "../../assests/icon/services-acct.svg";
import { ReactComponent as SettlementsIcon } from "../../assests/icon/settlement.svg";
import { ReactComponent as ReportsIcon } from "../../assests/icon/report.svg";
import { ReactComponent as PreferencesIcon } from "../../assests/icon/settings.svg";
import { ReactComponent as FeesPriceIcon } from "../../assests/icon/pricing.svg";
import { ReactComponent as AuditLogsIcon } from "../../assests/icon/audit.svg";
import { ReactComponent as CaretIcon } from "../../assests/icon/caret.svg";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {
      icon: SwitchIcon,
      text: "Switch Organization",
      isDropdown: true,
    },
    {
      icon: DashboardIcon,
      text: "Dashboard",
      isDropdown: false,
    },
  ];
  const customers = [
    {
      icon: UsersIcon,
      text: "Users",
    },
    {
      icon: GuarantorsIcon,
      text: "Guarantors",
    },
    {
      icon: LoansIcon,
      text: "Loans",
    },
    {
      icon: DecisionIcon,
      text: "Decision Models",
    },
    {
      icon: SavingsIcon,
      text: "Savings",
    },
    {
      icon: LoanreqIcon,
      text: "Loan Requests",
    },
    {
      icon: WhitelistIcon,
      text: "Whitelist",
    },
    {
      icon: KarmaIcon,
      text: "Karma",
    },
  ];
  const businesses = [
    {
      icon: OrganizationIcon,
      text: "Organization",
    },

    {
      icon: LoanProIcon,
      text: "Loan Products",
    },
    {
      icon: SavingsProIcon,
      text: "Savings Products",
    },
    {
      icon: FeesCharIcon,
      text: "Fees and Charges",
    },
    {
      icon: TransactionsIcon,
      text: "Transactions",
    },
    {
      icon: ServicesIcon,
      text: "Services",
    },
    {
      icon: ServiceAccIcon,
      text: "Service Account",
    },
    {
      icon: SettlementsIcon,
      text: "Settlements",
    },
    {
      icon: ReportsIcon,
      text: "Reports",
    },
  ];
  const settings = [
    {
      icon: PreferencesIcon,
      text: "Preferences",
    },
    {
      icon: FeesPriceIcon,
      text: "Fees and Pricing",
    },
    {
      icon: AuditLogsIcon,
      text: "Audit Logs",
    },
  ];

  const navLinks = {
    customers,
    businesses,
    settings,
  };
  const logout = () => {
    localStorage.removeItem("signup");
  };
  return (
    <aside className="sidebar">
      <div className="top-links">
        {links.map(({ text, icon: Icon, isDropdown }) => (
          <NavLink
            to={`/${text.toLocaleLowerCase().replace(" ", "-")}`}
            key={text}
            className="link"
          >
            <Icon />
            <span>{text}</span>
            {isDropdown && <CaretIcon />}
          </NavLink>
        ))}
      </div>
      <div className="main-links">
        {Object.keys(navLinks).map((key) => (
          <div key={key} className="nav-section">
            <h5>{key}</h5>
            <div className="link-list">
              {navLinks[key].map(({ text, icon: Icon }) => (
                <NavLink
                  to={`/${text.toLocaleLowerCase().replace(" ", "-")}`}
                  key={text}
                  className="link"
                >
                  <Icon />
                  <span>{text}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="sidebar-bottom">
        <button onClick={logout}>Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;
