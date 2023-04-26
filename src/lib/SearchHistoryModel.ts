import {StorageProvider} from './StorageProvider';

const searchHistoryKey = 'searchHistory';

export class SearchHistory {
  entries: string[] = [];

  constructor(
    private storageProvider: StorageProvider,
    public queueSize: number,
  ) {}

  async initialize() {
    const storageEntries = await this.storageProvider.fetch(searchHistoryKey);
    const entries = storageEntries ? JSON.parse(storageEntries) : [];

    return this.updateEntries(entries);
  }

  async add(entry: string) {
    this.entries.unshift(entry);
    this.entries.length > this.queueSize && this.entries.pop();

    return this.updateEntries(this.entries);
  }

  async clear() {
    return this.updateEntries([]);
  }

  private async updateEntries(entries: string[]) {
    await this.storageProvider.update(
      searchHistoryKey,
      JSON.stringify(entries),
    );
    this.entries = entries;

    return this;
  }
}
