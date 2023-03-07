window.onload = function() {

const submitButton = document.getElementById('submitButton');
const upgradeFeatures = document.getElementById('upgradeFeatures');
const currentPlan = document.getElementById('currentPlan');
const futurePlan = document.getElementById('futurePlan');
const upgradeResources = document.getElementById('upgradeResources');

document.querySelector('.left-container2').style.display = 'none';

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
  if (currentPlanValue === 'plus' && futurePlanValue === 'select') {
    featureList = "<strong style='color:#E01E5A'>Admin API</strong>: Automate admin processes.<br><br><strong style='color:#E01E5A'>Session Management</strong>: Granular logout controls that can be applied to mobile or desktop (also available via the Admin API).<br><br><strong style='color:#E01E5A'>DLP (Data Loss Prevention)</strong>: Automatically scan and detect/remove unsanctioned data (requires third party CASB tool).<br><br><strong style='color:#E01E5A'>Audit Logs API</strong>: Proactively track user actions to detect potential security threads (requires third party SIEM tool or custom tool).<br><br><strong style='color:#E01E5A'>Audit Logs (Native Dashboard)</strong>: Track user actions directly in a Slack admin dashboard.<br><br><strong style='color:#E01E5A'>eDiscovery Archiving</strong>: Automatically back up Slack data in a third party data warehouse to then filter and search specific data that is required for an audit.<br><br><strong style='color:#E01E5A'>Exports (Single User Exports)</strong>: Data related to a specific user (JSON or TXT file).";
  } else if (currentPlanValue === 'pro' && futurePlanValue === 'plus') {
    resourcesList = "<a href='https://docs.google.com/presentation/d/1bGj9vBcfo8ixV3hIQFZvx99o3ABP4N3i80dgDNYPQ_U/edit#slide=id.g1fe5814a505_0_2002'>Pro to Business+ Upgrade Levers Deck</a><br><br><a href='https://docs.google.com/presentation/d/1bGj9vBcfo8ixV3hIQFZvx99o3ABP4N3i80dgDNYPQ_U/edit#slide=id.g1fe5814a505_0_2002'>Quantifying Risk Pro to Business+ Upgrade Levers</a>",
    featureList = "<strong style='color:#E01E5A'>Message Activity</strong>: View the engagement stats of individual messages.<br><br><strong style='color:#E01E5A'>Central Channel Dashboard</strong>: View and edit all channels from one dashboard.<br><br><strong style='color:#E01E5A'>Analytics API (Conversations)</strong>: Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>SAML SSO</strong>: Advanced SSO (used with Okta, Azure, etc.).<br><br><strong style='color:#E01E5A'>SCIM API</strong>: Automate user management processes (create, update, and deactivate).<br><br><strong style='color:#E01E5A'>Exports (Full Data)</strong>: Includes private channels and DMs (JSON format).<br><br><strong style='color:#E01E5A'>Approve Workspaces</strong>: Configure your corporate network/VPN to only allow access to specific workspace URLs.<br><br><strong style='color:#E01E5A'>Data Residency (IDR)</strong>: Change where data is physically hosted (default data location is the United States).";
  } else if (currentPlanValue === 'select' && futurePlanValue === 'grid') {
    featureList = "<strong style='color:#E01E5A'>Slack Connect (Sponsored Connections)</strong>: Host Slack Connect channels with Free workspaces.<br><br><strong style='color:#E01E5A'>Multi-Workspace Channels:</strong> Channels shared internally between workspaces in a Grid Org.<br><br><strong style='color:#E01E5A'>Granular Admin Roles (System Roles):</strong> Create admin users with only specific admin permissions.<br><br><strong style='color:#E01E5A'>Analytics API (Members and Conversations):</strong> Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>Custom Retention Policies (Org-Wide):</strong> Set specific retention settings on workspaces within the Grid Org (i.e. a shorter retention on a more security-focused workspace) or apply overall retention settings for the whole Grid Org.<br><br><strong style='color:#E01E5A'>Multi-SAML SSO:</strong> Connect multiple different SSO Providers into the same Grid Org.<br><br><strong style='color:#E01E5A'>SCIM API (Guest Provisioning):</strong> Provision Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>IDP Groups:</strong> Org level groups to sync users to workspaces and channels.<br><br><strong style='color:#E01E5A'>Domain Claiming:</strong> Prevent Free workspaces from being created that are linked to a 'claimed' corporate email address domain.<br><br><strong style='color:#E01E5A'>MDM (Mobile Device Management):</strong> Apply extra security controls at device level. Managed via AppConfig vendor apps.<br><br><strong style='color:#E01E5A'>MAM (Mobile Application Management):</strong> Apply security controls directly to the Slack app, meaning that the device does not need to be managed (only MS Intune is supported).<br><br><strong style='color:#E01E5A'>Native Mobile Controls:</strong> Security controls applied directly from Slack (requires no third party tools).<br><br><strong style='color:#E01E5A'>Block File Downloads/Copying (Desktop):</strong> Block downloads on desktop, and even restrict based on an IP address range.<br><br><strong style='color:#E01E5A'>Legal Holds:</strong> Preserve users' data for litigation purposes (even if it's deleted via Retention Settings).<br><br><strong style='color:#E01E5A'>Information Barriers:</strong> Prevent groups of users from communicating via DMs.<br><br><strong style='color:#E01E5A'>Native DLP (Slack Connect Only):</strong> Natively set basic DLP policies via an admin dashboard in Slack.<br><br><strong style='color:#E01E5A'>Custom Terms of Service:</strong> Add specific verbiage and corporate terms for users to accept before using Slack.<br><br><strong style='color:#E01E5A'>Flag Messages:</strong> End users can flag messages to then be reviewed by the admin team. Can be used to remove unsanctioned content.<br><br><strong style='color:#E01E5A'>Lock Threads</strong>: Prevent addtional messages from being sent in a thread."
  } else if (currentPlanValue !== 'select' && futurePlanValue === 'grid') {
    featureList = "<strong style='color:#E01E5A'>Admin API</strong>: Automate admin processes.<br><br><strong style='color:#E01E5A'>Session Management</strong>: Granular logout controls that can be applied to mobile or desktop (also available via the Admin API).<br><br><strong style='color:#E01E5A'>DLP (Data Loss Prevention)</strong>: Automatically scan and detect/remove unsanctioned data (requires third party CASB tool).<br><br><strong style='color:#E01E5A'>Audit Logs API</strong>: Proactively track user actions to detect potential security threads (requires third party SIEM tool or custom tool).<br><br><strong style='color:#E01E5A'>Audit Logs (Native Dashboard)</strong>: Track user actions directly in a Slack admin dashboard.<br><br><strong style='color:#E01E5A'>eDiscovery Archiving</strong>: Automatically back up Slack data in a third party data warehouse to then filter and search specific data that is required for an audit.<br><br><strong style='color:#E01E5A'>Exports (Single User Exports)</strong>: Data related to a specific user (JSON or TXT file). <strong style='color:#E01E5A'>Slack Connect (Sponsored Connections)</strong>: Host Slack Connect channels with Free workspaces.<br><br><strong style='color:#E01E5A'>Multi-Workspace Channels:</strong> Channels shared internally between workspaces in a Grid Org.<br><br><strong style='color:#E01E5A'>Granular Admin Roles (System Roles):</strong> Create admin users with only specific admin permissions.<br><br><strong style='color:#E01E5A'>Analytics API (Members and Conversations):</strong> Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>Custom Retention Policies (Org-Wide):</strong> Set specific retention settings on workspaces within the Grid Org (i.e. a shorter retention on a more security-focused workspace) or apply overall retention settings for the whole Grid Org.<br><br><strong style='color:#E01E5A'>Multi-SAML SSO:</strong> Connect multiple different SSO Providers into the same Grid Org.<br><br><strong style='color:#E01E5A'>SCIM API (Guest Provisioning):</strong> Provision Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>IDP Groups:</strong> Org level groups to sync users to workspaces and channels.<br><br><strong style='color:#E01E5A'>Domain Claiming:</strong> Prevent Free workspaces from being created that are linked to a 'claimed' corporate email address domain.<br><br><strong style='color:#E01E5A'>MDM (Mobile Device Management):</strong> Apply extra security controls at device level. Managed via AppConfig vendor apps.<br><br><strong style='color:#E01E5A'>MAM (Mobile Application Management):</strong> Apply security controls directly to the Slack app, meaning that the device does not need to be managed (only MS Intune is supported).<br><br><strong style='color:#E01E5A'>Native Mobile Controls:</strong> Security controls applied directly from Slack (requires no third party tools).<br><br><strong style='color:#E01E5A'>Block File Downloads/Copying (Desktop):</strong> Block downloads on desktop, and even restrict based on an IP address range.<br><br><strong style='color:#E01E5A'>Legal Holds:</strong> Preserve users' data for litigation purposes (even if it's deleted via Retention Settings).<br><br><strong style='color:#E01E5A'>Information Barriers:</strong> Prevent groups of users from communicating via DMs.<br><br><strong style='color:#E01E5A'>Native DLP (Slack Connect Only):</strong> Natively set basic DLP policies via an admin dashboard in Slack.<br><br><strong style='color:#E01E5A'>Custom Terms of Service:</strong> Add specific verbiage and corporate terms for users to accept before using Slack.<br><br><strong style='color:#E01E5A'>Flag Messages:</strong> End users can flag messages to then be reviewed by the admin team. Can be used to remove unsanctioned content.<br><br><strong style='color:#E01E5A'>Lock Threads</strong>: Prevent addtional messages from being sent in a thread."
  } else if (currentPlanValue === 'pro' && futurePlanValue === 'select') {
    featureList = "<strong style='color:#E01E5A'>Message Activity</strong>: View the engagement stats of individual messages.<br><br><strong style='color:#E01E5A'>Central Channel Dashboard</strong>: View and edit all channels from one dashboard.<br><br><strong style='color:#E01E5A'>Analytics API (Conversations)</strong>: Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>SAML SSO</strong>: Advanced SSO (used with Okta, Azure, etc.).<br><br><strong style='color:#E01E5A'>SCIM API</strong>: Automate user management processes (create, update, and deactivate).<br><br><strong style='color:#E01E5A'>Exports (Full Data)</strong>: Includes private channels and DMs (JSON format).<br><br><strong style='color:#E01E5A'>Approve Workspaces</strong>: Configure your corporate network/VPN to only allow access to specific workspace URLs.<br><br><strong style='color:#E01E5A'>Data Residency (IDR)</strong>: Change where data is physically hosted (default data location is the United States). <br><br> <strong style='color:#E01E5A'>Admin API</strong>: Automate admin processes.<br><br><strong style='color:#E01E5A'>Session Management</strong>: Granular logout controls that can be applied to mobile or desktop (also available via the Admin API).<br><br><strong style='color:#E01E5A'>DLP (Data Loss Prevention)</strong>: Automatically scan and detect/remove unsanctioned data (requires third party CASB tool).<br><br><strong style='color:#E01E5A'>Audit Logs API</strong>: Proactively track user actions to detect potential security threads (requires third party SIEM tool or custom tool).<br><br><strong style='color:#E01E5A'>Audit Logs (Native Dashboard)</strong>: Track user actions directly in a Slack admin dashboard.<br><br><strong style='color:#E01E5A'>eDiscovery Archiving</strong>: Automatically back up Slack data in a third party data warehouse to then filter and search specific data that is required for an audit.<br><br><strong style='color:#E01E5A'>Exports (Single User Exports)</strong>: Data related to a specific user (JSON or TXT file).";
  } else if (currentPlanValue === 'free' && futurePlanValue === 'pro') {
    featureList = "<strong style='color:#E01E5A'>Guests</strong>: Single-Channel Guests, Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>Workflow Builder</strong>: No code/low code tool to automate common processes.<br><br><strong style='color:#E01E5A'>Google OAuth 2.0</strong>: Basic version of SSO (commonly used on the Pro plan).<br><br><strong style='color:#E01E5A'>User Groups</strong>: Workspace level groups to sync users to channels.<br><br><strong style='color:#E01E5A'>Session Duration</strong>: Set a cadence to automatically log users out on desktop and web browser.";
  } else if (currentPlanValue === 'free' && futurePlanValue === 'plus') {
    featureList = "<strong style='color:#E01E5A'>Guests</strong>: Single-Channel Guests, Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>Workflow Builder</strong>: No code/low code tool to automate common processes.<br><br><strong style='color:#E01E5A'>Google OAuth 2.0</strong>: Basic version of SSO (commonly used on the Pro plan).<br><br><strong style='color:#E01E5A'>User Groups</strong>: Workspace level groups to sync users to channels.<br><br><strong style='color:#E01E5A'>Session Duration</strong>: Set a cadence to automatically log users out on desktop and web browser. <br><br> <strong style='color:#E01E5A'>Message Activity</strong>: View the engagement stats of individual messages.<br><br><strong style='color:#E01E5A'>Central Channel Dashboard</strong>: View and edit all channels from one dashboard.<br><br><strong style='color:#E01E5A'>Analytics API (Conversations)</strong>: Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>SAML SSO</strong>: Advanced SSO (used with Okta, Azure, etc.).<br><br><strong style='color:#E01E5A'>SCIM API</strong>: Automate user management processes (create, update, and deactivate).<br><br><strong style='color:#E01E5A'>Exports (Full Data)</strong>: Includes private channels and DMs (JSON format).<br><br><strong style='color:#E01E5A'>Approve Workspaces</strong>: Configure your corporate network/VPN to only allow access to specific workspace URLs.<br><br><strong style='color:#E01E5A'>Data Residency (IDR)</strong>: Change where data is physically hosted (default data location is the United States).";
  } else if (currentPlanValue === 'free' && futurePlanValue === 'select') {
    featureList = "<strong style='color:#E01E5A'>Guests</strong>: Single-Channel Guests, Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>Workflow Builder</strong>: No code/low code tool to automate common processes.<br><br><strong style='color:#E01E5A'>Google OAuth 2.0</strong>: Basic version of SSO (commonly used on the Pro plan).<br><br><strong style='color:#E01E5A'>User Groups</strong>: Workspace level groups to sync users to channels.<br><br><strong style='color:#E01E5A'>Session Duration</strong>: Set a cadence to automatically log users out on desktop and web browser. <br><br> <strong style='color:#E01E5A'>Message Activity</strong>: View the engagement stats of individual messages.<br><br><strong style='color:#E01E5A'>Central Channel Dashboard</strong>: View and edit all channels from one dashboard.<br><br><strong style='color:#E01E5A'>Analytics API (Conversations)</strong>: Connect data from the Analytics Dashboard into a third party BI tool to create custom analytics dashboards.<br><br><strong style='color:#E01E5A'>SAML SSO</strong>: Advanced SSO (used with Okta, Azure, etc.).<br><br><strong style='color:#E01E5A'>SCIM API</strong>: Automate user management processes (create, update, and deactivate).<br><br><strong style='color:#E01E5A'>Exports (Full Data)</strong>: Includes private channels and DMs (JSON format).<br><br><strong style='color:#E01E5A'>Approve Workspaces</strong>: Configure your corporate network/VPN to only allow access to specific workspace URLs.<br><br><strong style='color:#E01E5A'>Data Residency (IDR)</strong>: Change where data is physically hosted (default data location is the United States). <br><br> <strong style='color:#E01E5A'>Guests</strong>: Single-Channel Guests, Multi-Channel Guests.<br><br><strong style='color:#E01E5A'>Workflow Builder</strong>: No code/low code tool to automate common processes.<br><br><strong style='color:#E01E5A'>Google OAuth 2.0</strong>: Basic version of SSO (commonly used on the Pro plan).<br><br><strong style='color:#E01E5A'>User Groups</strong>: Workspace level groups to sync users to channels.<br><br><strong style='color:#E01E5A'>Session Duration</strong>: Set a cadence to automatically log users out on desktop and web browser.";
  } else {
    featureList = 'No features available for this upgrade.';
  }
  

  // Update the text of the upgradeFeatures paragraph element
  upgradeFeatures.innerHTML = featureList;
  upgradeResources.innerHTML = resourcesList

  if (resourcesList) {
  document.querySelector('.left-container2').style.display = 'block';
  } else {
    document.querySelector('.left-container2').style.display = 'none';
  }

  

});

};