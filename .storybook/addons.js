import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-notes/register';
import 'storybook-readme/register';

//將外掛插劍放這裡，告訴stroybook 我們有，並且會用，這裡算是他的全域
import '@storybook/addon-storysource/register'
import '@storybook/addon-options/register'
import '@storybook/addon-viewport/register'
// import '@storybook/addon-info/register' //沒有放
import '@storybook/addon-viewport/register'
import '@storybook/addon-docs/register';
// 有些插件 要在這邊引用註冊
// 全域變數觀察下來是在 config 宣告，然後再storyiesbook使用