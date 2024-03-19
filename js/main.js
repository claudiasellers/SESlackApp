window.onload = function() {
document.querySelector('.left-container2').style.display = 'none';


const submitButton = document.getElementById('submitButton');
const upgradeFeatures = document.getElementById('upgradeFeatures');
const currentPlan = document.getElementById('currentPlan');
const futurePlan = document.getElementById('futurePlan');
const upgradeResources = document.getElementById('upgradeResources');


submitButton.addEventListener('click', function() {
    event.preventDefault();
  // Get the selected values of the currentPlan and futurePlan dropdowns
  const currentPlanValue = currentPlan.value;
  console.log(currentPlan.value)
  const futurePlanValue = futurePlan.value;
  console.log(futurePlan.value)

  
  // Determine the appropriate feature list based on the selected plan values
  let featureList = '';
  let resourcesList = '';
  if (currentPlanValue === 'pro' && futurePlanValue === 'plus') {  
    resourcesList = "<a href='https://docs.google.com/presentation/d/16C_qd_s9TOdWnBYnjF5PjZu9PiaOImLsKRxVFGTKxkc/edit#slide=id.ge61b8bff18_0_1451'>Slack Business Plus Overview</a><br><br><a href='https://docs.google.com/presentation/d/1bGj9vBcfo8ixV3hIQFZvx99o3ABP4N3i80dgDNYPQ_U/edit#slide=id.g1fe5814a505_0_2002'>Pro to Business+ Upgrade Levers Deck</a><br><br><a href='https://docs.google.com/presentation/d/1AQoiQdCT_NEQQeIfxYmWIr4LB_8fn28niOhw_lxivmg/edit#slide=id.g127c9763baf_0_1172'>Quantifying Risk Pro to Business+ Upgrade Levers</a>";
    featureList = "<strong style='color:#E01E5A'>Message Activity</strong>: View the engagement stats of individual messages.<br><br><strong style='color:#E01E5A'>Central Channel Dashboard</strong>: View and edit all channels from one dashboard.<br><br><strong style='color:#E01E5A'>Analytics API (Conversations)</strong>: Connect data from the Analytics Dashboard into a third-party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>SAML SSO</strong>: Advanced SSO (used with Okta, Azure, etc.).<br><br><strong style='color:#E01E5A'>SCIM API</strong>: Automate user management processes (create, update, and deactivate).<br><br><strong style='color:#E01E5A'>Exports (Full Data)</strong>: Includes private channels and DMs (JSON format).<br><br><strong style='color:#E01E5A'>Approve Workspaces</strong>: Configure your corporate network/VPN to only allow access to specific workspace URLs.<br><br><strong style='color:#E01E5A'>Data Residency (IDR)</strong>: Change where data is physically hosted (default data location is the United States).<br><br><strong style='color:#E01E5A'>Channel Posting Permissions for Any Channel</strong>: Limit who can post in channels and lock down a channel to create an 'announcement channel'. This feature allows for better control over channel content and messaging.";
  } else if (currentPlanValue === 'plus' && futurePlanValue === 'grid') {
    resourcesList = "<a href='https://docs.google.com/presentation/d/1x_f_utXK9P48jwqWfmzP_ZkXDNf3DipJhnaF2wyqIhQ/edit#slide=id.g1ced2a230de_0_1855'>Slack Enterprise Grid Overview</a><br><br><a href='https://docs.google.com/presentation/d/1yZ7aY5VJcTD42S8DHG0LOdktCcyZaRXun4uzLEGzgF4/edit#slide=id.g1c62b72c420_0_4747'>[Select/Grid - Use with Midas] Positioning Customer Account Metrics as Security Upgrade Considerations</a>";
    featureList = "<strong style='color:#E01E5A'>Admin API</strong>: Automate admin processes.<br><br><strong style='color:#E01E5A'>Session Management</strong>: Granular logout controls that can be applied to mobile or desktop (also available via the Admin API).<br><br><strong style='color:#E01E5A'>DLP (Data Loss Prevention)</strong>: Automatically scan and detect/remove unsanctioned data (requires third party CASB tool).<br><br><strong style='color:#E01E5A'>Audit Logs API</strong>: Proactively track user actions to detect potential security threads (requires third party SIEM tool or custom tool).<br><br><strong style='color:#E01E5A'>Audit Logs (Native Dashboard)</strong>: Track user actions directly in a Slack admin dashboard.<br><br><strong style='color:#E01E5A'>eDiscovery Archiving</strong>: Automatically back up Slack data in a third party data warehouse to then filter and search specific data that is required for an audit.<br><br><strong style='color:#E01E5A'>Exports (Single User Exports)</strong>: Data related to a specific user (JSON or TXT file).<br><br><strong style='color:#E01E5A'>Slack Connect (Sponsored Connections)</strong>: Host Slack Connect channels with Free workspaces.<br><br><strong style='color:#E01E5A'>Multi-Workspace Channels:</strong> Channels shared internally between workspaces in a Grid Org.<br><br><strong style='color:#E01E5A'>Granular Admin Roles (System Roles):</strong> Create admin users with only specific admin permissions.<br><br><strong style='color:#E01E5A'>Analytics API (Members and Conversations):</strong> Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>Custom Retention Policies (Org-Wide):</strong> Set specific retention settings on workspaces within the Grid Org (i.e. a shorter retention on a more security-focused workspace) or apply overall retention settings for the whole Grid Org.<br><br><strong style='color:#E01E5A'>Multi-SAML SSO:</strong> Connect multiple different SSO Providers into the same Grid Org.<br><br><strong style='color:#E01E5A'>SCIM API (Guest Provisioning):</strong> Provision Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>IDP Groups:</strong> Org level groups to sync users to workspaces and channels.<br><br><strong style='color:#E01E5A'>Domain Claiming:</strong> Prevent Free workspaces from being created that are linked to a 'claimed' corporate email address domain.<br><br><strong style='color:#E01E5A'>MDM (Mobile Device Management):</strong> Apply extra security controls at device level. Managed via AppConfig vendor apps.<br><br><strong style='color:#E01E5A'>MAM (Mobile Application Management):</strong> Apply security controls directly to the Slack app, meaning that the device does not need to be managed (only MS Intune is supported).<br><br><strong style='color:#E01E5A'>Native Mobile Controls:</strong> Security controls applied directly from Slack (requires no third party tools).<br><br><strong style='color:#E01E5A'>Block File Downloads/Copying (Desktop):</strong> Block downloads on desktop, and even restrict based on an IP address range.<br><br><strong style='color:#E01E5A'>Legal Holds:</strong> Preserve users' data for litigation purposes (even if it's deleted via Retention Settings).<br><br><strong style='color:#E01E5A'>Information Barriers:</strong> Prevent groups of users from communicating via DMs.<br><br><strong style='color:#E01E5A'>Native DLP (Slack Connect Only):</strong> Natively set basic DLP policies via an admin dashboard in Slack.<br><br><strong style='color:#E01E5A'>Custom Terms of Service:</strong> Add specific verbiage and corporate terms for users to accept before using Slack.<br><br><strong style='color:#E01E5A'>Flag Messages:</strong> End users can flag messages to then be reviewed by the admin team. Can be used to remove unsanctioned content.<br><br><strong style='color:#E01E5A'>Lock Threads</strong>: Prevent addtional messages from being sent in a thread.";
  } else if (currentPlanValue === 'select' && futurePlanValue === 'grid') {
    resourcesList = "<a href='https://docs.google.com/presentation/d/1x_f_utXK9P48jwqWfmzP_ZkXDNf3DipJhnaF2wyqIhQ/edit#slide=id.g1ced2a230de_0_1855'>Slack Enterprise Grid Overview</a><br><br><a href='https://docs.google.com/presentation/d/1yZ7aY5VJcTD42S8DHG0LOdktCcyZaRXun4uzLEGzgF4/edit#slide=id.g1c62b72c420_0_4747'>[Select/Grid - Use with Midas] Positioning Customer Account Metrics as Security Upgrade Considerations</a>";
    featureList = "<strong style='color:#E01E5A'>Slack Connect (Sponsored Connections)</strong>: Host Slack Connect channels with Free workspaces.<br><br><strong style='color:#E01E5A'>Multi-Workspace Channels:</strong> Channels shared internally between workspaces in a Grid Org.<br><br><strong style='color:#E01E5A'>Granular Admin Roles (System Roles):</strong> Create admin users with only specific admin permissions.<br><br><strong style='color:#E01E5A'>Analytics API (Members and Conversations):</strong> Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>Custom Retention Policies (Org-Wide):</strong> Set specific retention settings on workspaces within the Grid Org (i.e. a shorter retention on a more security-focused workspace) or apply overall retention settings for the whole Grid Org.<br><br><strong style='color:#E01E5A'>Multi-SAML SSO:</strong> Connect multiple different SSO Providers into the same Grid Org.<br><br><strong style='color:#E01E5A'>SCIM API (Guest Provisioning):</strong> Provision Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>IDP Groups:</strong> Org level groups to sync users to workspaces and channels.<br><br><strong style='color:#E01E5A'>Domain Claiming:</strong> Prevent Free workspaces from being created that are linked to a 'claimed' corporate email address domain.<br><br><strong style='color:#E01E5A'>MDM (Mobile Device Management):</strong> Apply extra security controls at device level. Managed via AppConfig vendor apps.<br><br><strong style='color:#E01E5A'>MAM (Mobile Application Management):</strong> Apply security controls directly to the Slack app, meaning that the device does not need to be managed (only MS Intune is supported).<br><br><strong style='color:#E01E5A'>Native Mobile Controls:</strong> Security controls applied directly from Slack (requires no third party tools).<br><br><strong style='color:#E01E5A'>Block File Downloads/Copying (Desktop):</strong> Block downloads on desktop, and even restrict based on an IP address range.<br><br><strong style='color:#E01E5A'>Legal Holds:</strong> Preserve users' data for litigation purposes (even if it's deleted via Retention Settings).<br><br><strong style='color:#E01E5A'>Information Barriers:</strong> Prevent groups of users from communicating via DMs.<br><br><strong style='color:#E01E5A'>Native DLP (Slack Connect Only):</strong> Natively set basic DLP policies via an admin dashboard in Slack.<br><br><strong style='color:#E01E5A'>Custom Terms of Service:</strong> Add specific verbiage and corporate terms for users to accept before using Slack.<br><br><strong style='color:#E01E5A'>Flag Messages:</strong> End users can flag messages to then be reviewed by the admin team. Can be used to remove unsanctioned content.<br><br><strong style='color:#E01E5A'>Lock Threads</strong>: Prevent addtional messages from being sent in a thread."
  } else if (currentPlanValue === 'pro' && futurePlanValue === 'grid') {
    resourcesList = "<a href='https://docs.google.com/presentation/d/1x_f_utXK9P48jwqWfmzP_ZkXDNf3DipJhnaF2wyqIhQ/edit#slide=id.g1ced2a230de_0_1855'>Slack Enterprise Grid Overview</a><br><br><a href='https://docs.google.com/presentation/d/1yZ7aY5VJcTD42S8DHG0LOdktCcyZaRXun4uzLEGzgF4/edit#slide=id.g1c62b72c420_0_4747'>[Select/Grid - Use with Midas] Positioning Customer Account Metrics as Security Upgrade Considerations</a>";
    featureList = "<strong style='color:#E01E5A'>Message Activity</strong>: View the engagement stats of individual messages.<br><br><strong style='color:#E01E5A'>Central Channel Dashboard</strong>: View and edit all channels from one dashboard.<br><br><strong style='color:#E01E5A'>Analytics API (Conversations)</strong>: Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>SAML SSO</strong>: Advanced SSO (used with Okta, Azure, etc.).<br><br><strong style='color:#E01E5A'>SCIM API</strong>: Automate user management processes (create, update, and deactivate).<br><br><strong style='color:#E01E5A'>Exports (Full Data)</strong>: Includes private channels and DMs (JSON format).<br><br><strong style='color:#E01E5A'>Approve Workspaces</strong>: Configure your corporate network/VPN to only allow access to specific workspace URLs.<br><br><strong style='color:#E01E5A'>Data Residency (IDR)</strong>: Change where data is physically hosted (default data location is the United States). <br><br> <strong style='color:#E01E5A'>Admin API</strong>: Automate admin processes.<br><br><strong style='color:#E01E5A'>Session Management</strong>: Granular logout controls that can be applied to mobile or desktop (also available via the Admin API).<br><br><strong style='color:#E01E5A'>DLP (Data Loss Prevention)</strong>: Automatically scan and detect/remove unsanctioned data (requires third party CASB tool).<br><br><strong style='color:#E01E5A'>Audit Logs API</strong>: Proactively track user actions to detect potential security threads (requires third party SIEM tool or custom tool).<br><br><strong style='color:#E01E5A'>Audit Logs (Native Dashboard)</strong>: Track user actions directly in a Slack admin dashboard.<br><br><strong style='color:#E01E5A'>eDiscovery Archiving</strong>: Automatically back up Slack data in a third party data warehouse to then filter and search specific data that is required for an audit.<br><br><strong style='color:#E01E5A'>Exports (Single User Exports)</strong>: Data related to a specific user (JSON or TXT file). <br><br><strong style='color:#E01E5A'>Slack Connect (Sponsored Connections)</strong>: Host Slack Connect channels with Free workspaces.<br><br><strong style='color:#E01E5A'>Multi-Workspace Channels:</strong> Channels shared internally between workspaces in a Grid Org.<br><br><strong style='color:#E01E5A'>Granular Admin Roles (System Roles):</strong> Create admin users with only specific admin permissions.<br><br><strong style='color:#E01E5A'>Analytics API (Members and Conversations):</strong> Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>Custom Retention Policies (Org-Wide):</strong> Set specific retention settings on workspaces within the Grid Org (i.e. a shorter retention on a more security-focused workspace) or apply overall retention settings for the whole Grid Org.<br><br><strong style='color:#E01E5A'>Multi-SAML SSO:</strong> Connect multiple different SSO Providers into the same Grid Org.<br><br><strong style='color:#E01E5A'>SCIM API (Guest Provisioning):</strong> Provision Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>IDP Groups:</strong> Org level groups to sync users to workspaces and channels.<br><br><strong style='color:#E01E5A'>Domain Claiming:</strong> Prevent Free workspaces from being created that are linked to a 'claimed' corporate email address domain.<br><br><strong style='color:#E01E5A'>MDM (Mobile Device Management):</strong> Apply extra security controls at device level. Managed via AppConfig vendor apps.<br><br><strong style='color:#E01E5A'>MAM (Mobile Application Management):</strong> Apply security controls directly to the Slack app, meaning that the device does not need to be managed (only MS Intune is supported).<br><br><strong style='color:#E01E5A'>Native Mobile Controls:</strong> Security controls applied directly from Slack (requires no third party tools).<br><br><strong style='color:#E01E5A'>Block File Downloads/Copying (Desktop):</strong> Block downloads on desktop, and even restrict based on an IP address range.<br><br><strong style='color:#E01E5A'>Legal Holds:</strong> Preserve users' data for litigation purposes (even if it's deleted via Retention Settings).<br><br><strong style='color:#E01E5A'>Information Barriers:</strong> Prevent groups of users from communicating via DMs.<br><br><strong style='color:#E01E5A'>Native DLP (Slack Connect Only):</strong> Natively set basic DLP policies via an admin dashboard in Slack.<br><br><strong style='color:#E01E5A'>Custom Terms of Service:</strong> Add specific verbiage and corporate terms for users to accept before using Slack.<br><br><strong style='color:#E01E5A'>Flag Messages:</strong> End users can flag messages to then be reviewed by the admin team. Can be used to remove unsanctioned content.<br><br><strong style='color:#E01E5A'>Lock Threads</strong>: Prevent addtional messages from being sent in a thread.";
  } else if (currentPlanValue === 'free' && futurePlanValue === 'pro') {
    resourcesList = "<a href='https://docs.google.com/presentation/d/1cPYFxSvlJaqn8fDdtmGFJ1HTHYyOGS2Lf_yQ4Lm2_Fc/edit#slide=id.ge61b8bff18_0_1451'>Slack Pro Overview</a>";
    featureList = "<strong style='color:#E01E5A'>Guests</strong>: Single-Channel Guests, Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>Workflow Builder</strong>: No code/low code tool to automate common processes.<br><br><strong style='color:#E01E5A'>Google OAuth 2.0</strong>: Basic version of SSO (commonly used on the Pro plan).<br><br><strong style='color:#E01E5A'>User Groups</strong>: Workspace level groups to sync users to channels.<br><br><strong style='color:#E01E5A'>Session Duration</strong>: Set a cadence to automatically log users out on desktop and web browser.<br><br><strong style='color:#E01E5A'>Slack Connect (Shared Channels)</strong>: Connect channels between separate workspaces to collaborate with external partners.<br><br><strong style='color:#E01E5A'>Group Huddles</strong>: On the free plan, you can only huddle with a maximum of 2 people in DMs.<br><br><strong style='color:#E01E5A'>Message History</strong>: Slack retains data beyond 90 days, allowing users to access and search for communication logs beyond that period, improving the value of Slack as a searchable log of communication.<br><br><strong style='color:#E01E5A'>Unlimited Integrations</strong>: On the paid plans, users can integrate Slack with unlimited tools, while the free plan only allows a maximum of 10 integrations. Integrations unlock productivity for every team, regardless of the tools they use.";
  } else if (currentPlanValue === 'free' && futurePlanValue === 'plus') {
    resourcesList = "<a href='https://docs.google.com/presentation/d/1bGj9vBcfo8ixV3hIQFZvx99o3ABP4N3i80dgDNYPQ_U/edit#slide=id.g1fe5814a505_0_2002'>Slack Business Plus Overview</a>";
    featureList = "<strong style='color:#E01E5A'>Guests</strong>: Single-Channel Guests, Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>Workflow Builder</strong>: No code/low code tool to automate common processes.<br><br><strong style='color:#E01E5A'>Google OAuth 2.0</strong>: Basic version of SSO (commonly used on the Pro plan).<br><br><strong style='color:#E01E5A'>User Groups</strong>: Workspace level groups to sync users to channels.<br><br><strong style='color:#E01E5A'>Session Duration</strong>: Set a cadence to automatically log users out on desktop and web browser.<br><br><strong style='color:#E01E5A'>Slack Connect (Shared Channels)</strong>: Connect channels between separate workspaces to collaborate with external partners.<br><br><strong style='color:#E01E5A'>Group Huddles</strong>: On the free plan, you can only huddle with a maximum of 2 people in DMs.<br><br><strong style='color:#E01E5A'>Message History</strong>: Slack retains data beyond 90 days, allowing users to access and search for communication logs beyond that period, improving the value of Slack as a searchable log of communication.<br><br><strong style='color:#E01E5A'>Unlimited Integrations</strong>: On the paid plans, users can integrate Slack with unlimited tools, while the free plan only allows a maximum of 10 integrations. Integrations unlock productivity for every team, regardless of the tools they use.<br><br> <strong style='color:#E01E5A'>Message Activity</strong>: View the engagement stats of individual messages.<br><br><strong style='color:#E01E5A'>Central Channel Dashboard</strong>: View and edit all channels from one dashboard.<br><br><strong style='color:#E01E5A'>Analytics API (Conversations)</strong>: Connect data from the Analytics Dashboard into a third-party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>SAML SSO</strong>: Advanced SSO (used with Okta, Azure, etc.).<br><br><strong style='color:#E01E5A'>SCIM API</strong>: Automate user management processes (create, update, and deactivate).<br><br><strong style='color:#E01E5A'>Exports (Full Data)</strong>: Includes private channels and DMs (JSON format).<br><br><strong style='color:#E01E5A'>Approve Workspaces</strong>: Configure your corporate network/VPN to only allow access to specific workspace URLs.<br><br><strong style='color:#E01E5A'>Data Residency (IDR)</strong>: Change where data is physically hosted (default data location is the United States).<br><br><strong style='color:#E01E5A'>Channel Posting Permissions for Any Channel</strong>: Limit who can post in channels and lock down a channel to create an 'announcement channel'. This feature allows for better control over channel content and messaging.";
  } else if (currentPlanValue === 'free' && futurePlanValue === 'grid') {
    resourcesList = "<a href='https://docs.google.com/presentation/d/1x_f_utXK9P48jwqWfmzP_ZkXDNf3DipJhnaF2wyqIhQ/edit#slide=id.g1ced2a230de_0_1855'>Slack Enterprise Grid Overview</a><br><br><a href='https://docs.google.com/presentation/d/1yZ7aY5VJcTD42S8DHG0LOdktCcyZaRXun4uzLEGzgF4/edit#slide=id.g1c62b72c420_0_4747'>[Select/Grid - Use with Midas] Positioning Customer Account Metrics as Security Upgrade Considerations</a>";
    featureList = "<strong style='color:#E01E5A'>Guests</strong>: Single-Channel Guests, Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>Workflow Builder</strong>: No code/low code tool to automate common processes.<br><br><strong style='color:#E01E5A'>Google OAuth 2.0</strong>: Basic version of SSO (commonly used on the Pro plan).<br><br><strong style='color:#E01E5A'>User Groups</strong>: Workspace level groups to sync users to channels.<br><br><strong style='color:#E01E5A'>Session Duration</strong>: Set a cadence to automatically log users out on desktop and web browser. <br><br> <strong style='color:#E01E5A'>Message Activity</strong>: View the engagement stats of individual messages.<br><br><strong style='color:#E01E5A'>Central Channel Dashboard</strong>: View and edit all channels from one dashboard.<br><br><strong style='color:#E01E5A'>Analytics API (Conversations)</strong>: Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>SAML SSO</strong>: Advanced SSO (used with Okta, Azure, etc.).<br><br><strong style='color:#E01E5A'>SCIM API</strong>: Automate user management processes (create, update, and deactivate).<br><br><strong style='color:#E01E5A'>Exports (Full Data)</strong>: Includes private channels and DMs (JSON format).<br><br><strong style='color:#E01E5A'>Approve Workspaces</strong>: Configure your corporate network/VPN to only allow access to specific workspace URLs.<br><br><strong style='color:#E01E5A'>Data Residency (IDR)</strong>: Change where data is physically hosted (default data location is the United States). <br><br> <strong style='color:#E01E5A'>Guests</strong>: Single-Channel Guests, Multi-Channel Guests.<br><br>Admin API</strong>: Automate admin processes.<br><br><strong style='color:#E01E5A'>Session Management</strong>: Granular logout controls that can be applied to mobile or desktop (also available via the Admin API).<br><br><strong style='color:#E01E5A'>DLP (Data Loss Prevention)</strong>: Automatically scan and detect/remove unsanctioned data (requires third party CASB tool).<br><br><strong style='color:#E01E5A'>Audit Logs API</strong>: Proactively track user actions to detect potential security threads (requires third party SIEM tool or custom tool).<br><br><strong style='color:#E01E5A'>Audit Logs (Native Dashboard)</strong>: Track user actions directly in a Slack admin dashboard.<br><br><strong style='color:#E01E5A'>eDiscovery Archiving</strong>: Automatically back up Slack data in a third party data warehouse to then filter and search specific data that is required for an audit.<br><br><strong style='color:#E01E5A'>Exports (Single User Exports)</strong>: Data related to a specific user (JSON or TXT file).<br><br> <strong style='color:#E01E5A'>Slack Connect (Sponsored Connections)</strong>: Host Slack Connect channels with Free workspaces.<br><br><strong style='color:#E01E5A'>Multi-Workspace Channels:</strong> Channels shared internally between workspaces in a Grid Org.<br><br><strong style='color:#E01E5A'>Granular Admin Roles (System Roles):</strong> Create admin users with only specific admin permissions.<br><br><strong style='color:#E01E5A'>Analytics API (Members and Conversations):</strong> Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>Custom Retention Policies (Org-Wide):</strong> Set specific retention settings on workspaces within the Grid Org (i.e. a shorter retention on a more security-focused workspace) or apply overall retention settings for the whole Grid Org.<br><br><strong style='color:#E01E5A'>Multi-SAML SSO:</strong> Connect multiple different SSO Providers into the same Grid Org.<br><br><strong style='color:#E01E5A'>SCIM API (Guest Provisioning):</strong> Provision Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>IDP Groups:</strong> Org level groups to sync users to workspaces and channels.<br><br><strong style='color:#E01E5A'>Domain Claiming:</strong> Prevent Free workspaces from being created that are linked to a 'claimed' corporate email address domain.<br><br><strong style='color:#E01E5A'>MDM (Mobile Device Management):</strong> Apply extra security controls at device level. Managed via AppConfig vendor apps.<br><br><strong style='color:#E01E5A'>MAM (Mobile Application Management):</strong> Apply security controls directly to the Slack app, meaning that the device does not need to be managed (only MS Intune is supported).<br><br><strong style='color:#E01E5A'>Native Mobile Controls:</strong> Security controls applied directly from Slack (requires no third party tools).<br><br><strong style='color:#E01E5A'>Block File Downloads/Copying (Desktop):</strong> Block downloads on desktop, and even restrict based on an IP address range.<br><br><strong style='color:#E01E5A'>Legal Holds:</strong> Preserve users' data for litigation purposes (even if it's deleted via Retention Settings).<br><br><strong style='color:#E01E5A'>Information Barriers:</strong> Prevent groups of users from communicating via DMs.<br><br><strong style='color:#E01E5A'>Native DLP (Slack Connect Only):</strong> Natively set basic DLP policies via an admin dashboard in Slack.<br><br><strong style='color:#E01E5A'>Custom Terms of Service:</strong> Add specific verbiage and corporate terms for users to accept before using Slack.<br><br><strong style='color:#E01E5A'>Flag Messages:</strong> End users can flag messages to then be reviewed by the admin team. Can be used to remove unsanctioned content.<br><br><strong style='color:#E01E5A'>Lock Threads</strong>: Prevent addtional messages from being sent in a thread.<br><br><strong style='color:#E01E5A'>Slack Atlas:</strong> Get an overview of your coworkers: who they are, what they do, who they work with, and more, Auto-populate your directory with trusted and accurate information from enterprise systems and tools, Use searchable profile information and a dynamic org chart to easily find the coworkers you need to collaborate with — whether they work in Slack or not.<br><br><strong style='color:#E01E5A'>Custom Canvas Templates:</strong> End users and canvas admins can create and publish their own templates unique to their organization’s business needs to speed up processes at scale.<br><br><strong style='color:#E01E5A'>Out of Office Responder:</strong> A special status that allows users to automatically send an out of office response when someone tries to message them.<br><br><strong style='color:#E01E5A'>App Analytics:</strong>"On Grid, Org Owners, Admins, and Analytics Admins will be able to view metrics related to engagement with installed apps. API data is limited to whether or not a member and app interacted with each other (eg. using an app or having an app auto-update status)";
  } else {
    featureList = 'No features available.';
  }
  

  // Update the text of the upgradeFeatures paragraph element
  upgradeFeatures.innerHTML = featureList;
  upgradeResources.innerHTML = resourcesList

  if (resourcesList) {
  document.querySelector('.left-container2').style.display = 'block';
  } else {
    document.querySelector('.left-container2').style.display = 'none';
  }
  
  mixpanel.track('Upgrade Features Viewed', {
    'Current Plan': currentPlan.value,
    'Future Plan': futurePlan.value,
    
    });
  
    mixpanel.people.increment("Upgrade Features Viewed");
    mixpanel.people.set({'Last Current Plan': currentPlan.value,
    'Last Future Plan': futurePlan.value,})


});

};
