let fs = require("fs");
let path = require("path");
let pwd = path.resolve();
let args = JSON.parse(JSON.stringify(process.argv));
let type_map = {
  audio: ["mp3"],
  video: ["mp4"]
};
args.shift();
args.shift();
let dir_path = args[0];

let check_args = function(args) {
  if (args.length < 1) {
    throw "请输入 文件夹地址";
  } else {
    return true;
  }
};
//
let get_file_list = function(dir_path, files, root) {
  //check path is relative or absulte
  if (!path.isAbsolute(dir_path)) dir_path = path.resolve(pwd, dir_path);
  // return new Promise(resolve => {
  fs.readdirSync(dir_path).forEach(file => {
    //file_absolute_path
    let file_path = path.resolve(dir_path, file);

    if (fs.statSync(file_path).isDirectory()) {
      if (!root instanceof Array) root = [];
      files.push(get_file_list(file_path, root));
    } else {
      files.push({
        name: file,
        path: file_path
      });
    }

    // if (fs.statSync(file_path).isDirectory()) {
    //   let dir_name = file;
    //   files[dir_name] = [];
    //   get_file_list(file_path, files, dir_name);
    // } else if (dir_name) {
    //   files[dir_name].push({
    //     name: file,
    //     path: file_path
    //   });
    // } else {
    //   files.push({
    //     name: file,
    //     path: file_path
    //   });
    // }
  });
  return files;
  // });
};
//获取文件列表
let pick_files = function(type, files) {
  let reg_exp = "." + type + "$";
  let reg = new RegExp(reg_exp);
  let fil_list = [];
  files.forEach(ele => {
    if (reg.test(ele)) {
      fil_list.push(ele);
    }
  });
  return fil_list;
};
//core
let gene_json = function(name_list, source_base_path, file_dst) {
  let json;
  let struct = name => {
    let cell = {};
    cell.path = source_base_path + "\\" + name;
    //查询是否存在cover
    let cover_path = source_base_path + "\\" + name.split(".")[0] + ".jpg";
    if (fs.existsSync(cover_path)) {
      cell.cover = cover_path;
    }
    return cell;
  };
  let obj_arr = [];
  name_list.forEach(ele => {
    obj_arr.push(struct(ele));
  });
  json = JSON.stringify(obj_arr, null, 2);
  return json;
};
try {
  if (check_args(args)) {
    let files = [];
    files = get_file_list(dir_path, files);
    console.log("files..", files);
    // .then(rs => {
    //   let fil_list = pick_files(type, rs);
    //   let json = gene_json(
    //     fil_list,
    //     path.resolve(pwd, dir_path),
    //     path.resolve(pwd, dir_path)
    //   );
    //   let check_dir = (dir, child_dir) => {
    //     let parent = path.resolve(dir, "..");
    //     //TODO:先获取到最上一层的路径
    //     if (!fs.existsSync(dir)) {
    //       check_dir(parent);
    //     } else {
    //       fs.mkdirSync(dir);
    //     }
    //     //如果父存在，则生成子目录
    //   };
    //   let base_dst = path.resolve(pwd, "./file/json");
    //   check_dir(base_dst);
    //   let dst = path.resolve(base_dst, "test.json");
    //   fs.writeFileSync(dst, json);
    //   //TODO:先获取json文件，算出更新的文件个数。
    //   console.log("更新完毕");
    // });
  }
} catch (error) {
  console.log(error);
}
