declare module "@salesforce/apex/QlooAPIService.getEventArtistRecommendations" {
  export default function getEventArtistRecommendations(param: {clientCompany: any, location: any, targetAudiences: any}): Promise<any>;
}
declare module "@salesforce/apex/QlooAPIService.getBrandAlignmentInsights" {
  export default function getBrandAlignmentInsights(param: {retailerBrand: any, location: any, existingBrands: any}): Promise<any>;
}
declare module "@salesforce/apex/QlooAPIService.getCampaignCulturalStrategy" {
  export default function getCampaignCulturalStrategy(param: {campaignLocation: any, brandClient: any, targetDemographics: any}): Promise<any>;
}
declare module "@salesforce/apex/QlooAPIService.getCulturalAudienceTargeting" {
  export default function getCulturalAudienceTargeting(param: {campaignLocation: any, brandClient: any, targetDemographics: any}): Promise<any>;
}
