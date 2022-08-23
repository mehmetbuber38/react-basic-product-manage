# React Basic Product Manage

## Tanım

Bu, özel bir şirket tarafından talep edilen bir yetenek atamasıdır.
Gönderilen hedefe yakın yapılır.

## Gereksinimler

Geliştirme için yalnızca ortamınızda yüklü Node.js'ye ihtiyacınız olacak.
Ve lütfen Editörünüz için uygun [Editorconfig](http://editorconfig.org/) eklentisini kullanın (zorunlu değil).

### Node

[Node](http://nodejs.org/) yüklemek gerçekten çok kolay ve artık [NPM](https://npmjs.org/) içeriyor.
Kurulum prosedüründen sonra aşağıdaki komutu çalıştırabilmelisiniz.
aşağıda.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### OS X'te Node kurulumu

Bir Terminal kullanmanız gerekecek. OS X'te varsayılan terminali şurada bulabilirsiniz:
`/Applications/Utilities/Terminal.app`.

Aşağıdaki komutla henüz yapılmadıysa lütfen [Homebrew](http://brew.sh/) yükleyin.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

Her şey yolundaysa, çalıştırabilirsin

     brew install node

#### Node Linux'ta kurulum

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node Windows'ta kurulum

Sadece [resmi Node.js web sitesine](http://nodejs.org/) gidin ve yükleyiciyi alın.
Ayrıca PATH'inizde 'git' bulunduğundan emin olun, 'npm' buna ihtiyaç duyabilir.

---

Bu proje, [Create React App](https://github.com/facebook/create-react-app) ile başlatıldı.

## Kurulum

    $ git clone https://github.com/mehmetbuber38/react-basic-product-manage
    $ cd react-basic-product-manage
    $ yarn install or npm install

## Kullanılabilir Komut Dosyaları
!ÖNEMLİ: Giriş yapabilmek ve kullanıcı bilgilerini tutabilmek için bir mini 'node express' sunucusu kurmalısınız.

### `node server`

Proje dizininde şunları çalıştırabilirsiniz:

### `yarn start` or ### `npm run start`

### `yarn build` or ### `npm run build` fails to minify

Bu bölüm buraya taşındı: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

### Bağımlılıklar

- [React](http://facebook.github.io/react).

- [bootstrap](https://getbootstrap.com/) ızgara düzenini yerleştirmek için kullanılır.

- [react-router](https://reactrouter.com/) bağlantılı sayfalar için kullanılır.

- [cors](https://github.com/expressjs/cors#readme) sayfa kullanıcısına giriş yapmak için kullanılır

- [SCSS](https://github.com/sass/dart-sass) modülleri scss için kullanılır.

- [react-hot-toast](https://github.com/timolins/react-hot-toast) bildirimi ateşlemek için kullanılır.

- [react-lazy-load-image-component](https://github.com/Aljullu/react-lazy-load-image-component#readme) performans için kullanılır
