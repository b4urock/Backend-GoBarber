export default interface IStorageProvider {
  saveFile(File: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
