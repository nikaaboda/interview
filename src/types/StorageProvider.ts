export type StorageValue = string | null;

export type Storage = {
  getItem: (arg: string) => Promise<StorageValue>;
  setItem: (arg0: string, arg1: string) => Promise<void>;
  removeItem: (arg: string) => Promise<void>;
};

export type StorageFetchError = {
  error: unknown;
  key: string;
};

export type StorageUpdateError = {
  value: StorageValue;
} & StorageFetchError;
