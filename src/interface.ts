export interface CreateOptionsI {
  // initGitMessage?: string;
  type?: string;
  cwd?: string;
  force?: boolean; // 重名的话强制创建项目
  exist?: boolean;
  dir?: string;
}

// export interface InstallComponentOptionsI {
//   dir?: string;
//   componentName?: string;
//   cwd?: string;
//   force?: boolean; // 重名的话强制创建项目
// }
