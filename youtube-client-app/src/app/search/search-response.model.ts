import SearchItem from "./search-item.model"

export default interface SearchResult {
  kind: "youtube@videoListResponse",
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: SearchItem[]
}