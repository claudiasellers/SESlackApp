const featureData = {
    "featureAvailability": {
    "Multiple Workspaces": { "free": false, "pro": false, "plus": false, "grid": true },
    "Canvas": { "free": false, "pro": true, "plus": true, "grid": true },
    "Custom Canvas Templates": { "free": false, "pro": false, "plus": false, "grid": true },
    "Slack Sales Templates": { "free": false, "pro": false, "plus": false, "grid": "w/ Elevate" },
    "Clips": { "free": true, "pro": true, "plus": true, "grid": true },
    "Guests": { "free": false, "pro": true, "plus": true, "grid": true },
    "Slack Connect (Shared Channels)": { "free":false, "pro": true, "plus": true, "grid": true },
    "Sponsored Connections - Slack Connect": { "free": false, "pro": false, "plus": false, "grid": true },
    "Per-Org Customization - Slack Connect": { "free": false, "pro": "(Limited)", "plus": true, "grid": "(+ Enhanced visibility)" },
    "Multi-Workspace Channels": { "free": false, "pro": false, "plus": false, "grid": true },
    "Channel Posting Permissions": { "free": "(#general channel only)", "pro": "(#general channel only)", "plus": true, "grid": true },
    "Workflow Builder": { "free": false, "pro": true, "plus": true, "grid": true },
    "Message Activity": { "free": false, "pro": true, "plus": true, "grid": true },
    "Slack Catch Up": { "free": true, "pro": true, "plus": true, "grid": true },
    "Slack AI": { "free": false, "pro": "(Add-on)", "plus": "(Add-on)", "grid": "(Add-on)" },
    "Out of Office Responder": { "free": false, "pro": false, "plus": false, "grid": true },
    "Lists": { "free": false, "pro": true, "plus": true, "grid": true },
    "Slack Channel Templates": { "free": false, "pro": true, "plus": true, "grid": true },
    "Granular Admin Roles": { "free": false, "pro": false, "plus": false, "grid": true },
    "Central Channel Dashboard": { "free": false, "pro": false, "plus": true, "grid": true },
    "Admin API": { "free": false, "pro": false, "plus": false, "grid": true },
    "Analytics API (Members)": { "free": false, "pro": false, "plus": false, "grid": true },
    "Analytics API (Conversations)": { "free": false, "pro": false, "plus": true, "grid": true },
    "App Analytics": { "free": false, "pro": false, "plus": false, "grid": true },
    "Custom Retention Policies (Workspace)": { "free": false, "pro": true, "plus": true, "grid": true },
    "Custom Retention Policies (Org-Wide)": { "free": false, "pro": false, "plus": false, "grid": true },
    "Lock Guest Names": { "free": true, "pro": true, "plus": true, "grid": true },
    "Google OAuth 2.0": { "free": false, "pro": true, "plus": true, "grid": false },
    "SAML SSO": { "free": false, "pro": false, "plus": true, "grid": true },
    "Multi-SAML SSO": { "free": false, "pro": false, "plus": false, "grid": true },
    "SCIM API": { "free": false, "pro": false, "plus": true, "grid": true },
    "SCIM API (Guest Provisioning)": { "free": false, "pro": false, "plus": false, "grid": true },
    "Atlas": { "free": false, "pro": false, "plus": false, "grid": true },
    "User Groups": { "free": false, "pro": true, "plus": true, "grid": true },
    "IDP Groups": { "free": false, "pro": false, "plus": false, "grid": true },
    "Session Duration": { "free": false, "pro": false, "plus": false, "grid": true },
    "Session Management": { "free": false, "pro": false, "plus": false, "grid": true },
    "Domain Claiming (create workspace)": { "free": false, "pro": false, "plus": false, "grid": true },
    "MDM (Mobile Device Management)": { "free": false, "pro": false, "plus": false, "grid": true },
    "MAM (Mobile Application Management)": { "free": false, "pro": false, "plus": false, "grid": true },
    "Native Mobile Controls": { "free": false, "pro": false, "plus": false, "grid": true },
    "EKM (Enterprise Key Management)": { "free": false, "pro": false, "plus": false, "grid": "(Add-on)" },
    "Block File Downloads/Copying (Desktop)": { "free": false, "pro": false, "plus": false, "grid": true },
    "Legal Holds": { "free": false, "pro": false, "plus": false, "grid": true },
    "Information Barriers": { "free": false, "pro": false, "plus": false, "grid": true },
    "DLP (Data Loss Prevention)": { "free": false, "pro": false, "plus": false, "grid": true },
    "Native DLP (Slack Connect Only)": { "free": false, "pro": false, "plus": false, "grid": true },
    "Audit Logs API": { "free": false, "pro": false, "plus": false, "grid": true },
    "Audit Logs (Native Dashboard)": { "free": false, "pro": false, "plus": false, "grid": true },
    "Discovery/DLP API": { "free": false, "pro": false, "plus": false, "grid": true },
    "Exports (Public Data)": { "free": false, "pro": true, "plus": true, "grid": true },
    "Exports (Full Data)": { "free": false, "pro": false, "plus": true, "grid": true },
    "Exports (Single User Exports)": { "free": false, "pro": false, "plus": false, "grid": true },
    "Custom Terms of Service": { "free": false, "pro": false, "plus": false, "grid": true },
    "Approve Workspaces": { "free": false, "pro": false, "plus": true, "grid": true },
    "Data Residency (IDR)": { "free": false, "pro": false, "plus": true, "grid": true },
    "Customer Support Tier": { "free": "Standard support", "pro": "24/7 support", "plus": "24/7 support (4-hour first response)", "grid": "24/7 priority support (4-hour first response)" },
    "99.99% Guaranteed Uptime SLA": { "free": false, "pro": false, "plus": true, "grid": true }
    },
    "featureDescriptions": {
        "Workspace": "",
        "Integrations": "Apps/integrations, custom apps, App Directory apps.",
        "Huddles": "",
        "Canvas": "",
        "Custom Canvas Templates": "",
        "Slack Sales Templates": "Salesforce-integrated canvases that can include editable Salesforce records.",
        "Clips": "Record audio/video clips and upload directly.",
        "Guests": "Single-Channel Guests, Multi-Channel Guests.",
        "Slack Connect (Shared Channels)": "Connect channels between separate workspaces to collaborate with external partners.",
        "Sponsored Connections - Slack Connect": "Host Slack Connect channels with Free workspaces.",
        "Per-Org Customization - Slack Connect": "Some Slack Connect settings can be customized on a per-org basis.",
        "Slack Connect Workspaces": "A special workspace for external connections. Currently in Pilot.",
        "Multi-Workspace Channels": "Channels shared internally between workspaces in a Grid Org.",
        "Channel Posting Permissions": "Limit who can post in channels (e.g., lock down a channel to create an 'announcement channel').",
        "Workflow Builder": "No code/low code tool to automate common processes.",
        "Message Activity": "View the engagement stats of individual messages.",
        "Elevate": "A single view of critical information for sales teams including metrics, opportunity list views, and notifications.",
        "Slack Catch Up": "Swipe through unread conversations on Mobile.",
        "Slack AI": "Native AI/GPT capabilities in Slack.",
        "Out of Office Responder": "Automatically send an out-of-office response when someone messages you.",
        "Lists": "Track structured information in a table format.",
        "Slack Templates": "Slack Solutions—a full channel-based solution with lists, canvases, and workflows.",
        "Granular Admin Roles": "Create admin users with specific admin permissions.",
        "Central Channel Dashboard": "View and edit all channels from one dashboard.",
        "Admin API": "Automate admin processes.",
        "Analytics API (Members)": "Connect data from the Analytics Dashboard into a third-party BI tool to create custom analytics dashboards.",
        "Analytics API (Conversations)": "View engagement metrics related to installed apps.",
        "App Analytics": "API data is limited to whether a member and app interacted with each other.",
        "Custom Retention Policies (Workspace)": "Set preferences for how long messages/files should be retained on a workspace.",
        "Custom Retention Policies (Org-Wide)": "Set specific retention settings on workspaces within a Grid Org.",
        "Lock Guest Names": "",
        "Google OAuth 2.0": "Basic version of SSO (commonly used on the Pro plan).",
        "SAML SSO": "Advanced SSO (used with Okta, Azure, etc.).",
        "Multi-SAML SSO": "Connect multiple different SSO Providers into the same Grid Org.",
        "SCIM API": "Automate user management processes (create, update, and deactivate users).",
        "SCIM API (Guest Provisioning)": "Provision Multi-Channel Guests via SCIM.",
        "Atlas": "Enhanced profile fields and an org chart user directory.",
        "User Groups": "Workspace-level groups to sync users to channels.",
        "IDP Groups": "Org-level groups to sync users to workspaces and channels.",
        "Session Duration": "Set a cadence to automatically log users out on desktop and web browser.",
        "Session Management": "Granular logout controls that apply to mobile or desktop.",
        "Domain Claiming (join workspace)": "Prevent joining or creating workspaces using a claimed and verified domain.",
        "Domain Claiming (create workspace)": "Prevent Free workspaces from being created that are linked to a claimed corporate email domain.",
        "MDM (Mobile Device Management)": "Apply extra security controls at the device level. Managed via AppConfig vendor apps.",
        "MAM (Mobile Application Management)": "Apply security controls directly to the Slack app.",
        "Native Mobile Controls": "Security controls applied directly from Slack (requires no third-party tools).",
        "EKM (Enterprise Key Management)": "Manage your own encryption keys (requires Amazon KMS).",
        "Block File Downloads/Copying (Desktop)": "Block downloads on desktop and restrict based on an IP address range.",
        "Legal Holds": "Preserve users data for litigation purposes (even if its deleted via Retention Settings).",
        "Information Barriers": "Prevent groups of users from communicating via DMs.",
        "DLP (Data Loss Prevention)": "Automatically scan and detect/remove unapproved data.",
        "Native DLP (Slack Connect Only)": "Natively set basic DLP policies via an admin dashboard in Slack.",
        "Audit Logs API": "Proactively track user actions to detect potential security threats.",
        "Audit Logs (Native Dashboard)": "Track user actions directly in a Slack admin dashboard.",
        "Discovery/DLP API": "Connect all Slack data to an eDiscovery tool or DLP tool.",
        "Exports (Public Data)": "Public channels only (JSON format).",
        "Exports (Full Data)": "Includes private channels and DMs (JSON format).",
        "Exports (Single User Exports)": "Data related to a specific user (JSON or TXT file).",
        "Custom Terms of Service": "Add specific verbiage and corporate terms for users to accept before using Slack.",
        "Approve Workspaces": "Configure a corporate network/VPN to only allow access to specific workspace URLs.",
        "Data Residency (IDR)": "Change where data is physically hosted (default: United States).",
        "Flag Messages": "End users can flag messages for review by admins.",
        "Report to Slack for EU Users": "Allows users to report prohibited content to Slack for review (EU Digital Services Act compliance).",
        "Lock Threads": "Prevent additional messages from being sent in a thread.",
        "Customer Support Tier": "Enterprise Grid customers may be supported by a dedicated Account Executive and Success Guide.",
        "99.99% Guaranteed Uptime SLA": "Customers are entitled to SLA billing credits if downtime occurs."
    },
    "featurePainPoints": {
      "Guests": "Allows external contractors or partners to have limited access.",
      "Slack Connect (Shared Channels)": "Prevents silos by allowing external collaboration."
    }
  }