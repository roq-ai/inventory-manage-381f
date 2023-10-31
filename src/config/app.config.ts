interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Inventory Manager', 'Sales Representative'],
  tenantName: 'Business',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View personal user information',
    'Update personal user information',
    'View business information',
    'Cannot modify business information',
  ],
  ownerAbilities: ['Manage user information', 'Manage business information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/3a1eb1e1-aa6e-43a2-9b99-c17b13443224',
};
