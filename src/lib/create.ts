// import { CreateOptionsI } from '../interface';
import { yellow, green } from 'chalk';
import { command } from 'execa';
export const createApp = (name: string) => {
    console.log('create app here!!!');
    return create(name).catch((err) => {
        // stopSpinner(false);
        // error(err);
    });
}

const create = async (projectName: string ) => {
    // 1.考虑重复的命令

    // 2.拉取模版 (从本地（尝试学习本地）或者从远程)
    console.log(yellow(`正在拉取模版...`));
    await command(`git clone https://github.com/Luffyying/vueSimple.git ${projectName}`)
    await command(`rm -rf ./${projectName}/.git`);
    // todo 自动下载包
    console.log(green(`已成功创建 ${projectName}`));
}