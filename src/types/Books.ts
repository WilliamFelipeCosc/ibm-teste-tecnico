export interface BookApiReturn {
  items: Array<any>
  kind: string
  totalItems: number
}

export interface Book {
  accessInfo : AccessInfo
  etag: string
  id: string
  kind: string
  saleInfo: SaleInfo
  searchInfo: SearchInfo
  selfLink: string
  volumeInfo: VolumeInfo
}

export interface AccessInfo {
  accessViewStatus: string
  country: string
  embeddable: boolean
  epub: {
    acsTokenLink: string
    isAvailable:boolean
  }
  pdf: {
    acsTokenLink: string
    isAvailable:boolean
  }
  publicDomain: boolean
  quoteSharingAllowed: boolean
  textToSpeechPermission: string
  viewability: string
  webReaderLink: string
}

export interface SaleInfo {
  buyLink: string
  country: string
  isEbook: boolean
  listPrice: {
    amount: number, currencyCode: string
  }
  retailPrice: {
    amount: number, currencyCode:string
  }
  saleability: string
}

export interface SearchInfo {
  textSnippet: string
}

export interface VolumeInfo {
  allowAnonLogging: boolean
  authors: Array<string>
  canonicalVolumeLink: string
  categories: Array<string>
  contentVersion: string
  description: string
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }
  industryIdentifiers: {
    type: string, 
    identifier: string
  }[]
  infoLink: string
  language: string
  maturityRating: string
  pageCount: number
  panelizationSummary: {containsEpubBubbles: boolean, containsImageBubbles: boolean}
  previewLink: string
  printType: string
  publishedDate: string
  publisher: string
  readingModes: {text: boolean, image: boolean}
  image: boolean
  text: boolean
  subtitle: string
  title: string
}