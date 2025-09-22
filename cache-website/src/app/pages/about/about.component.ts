import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  imports: [CommonModule, NzTabsModule],
  selector: 'app-about-page',
  templateUrl: './about.component.html',
  styles: [
    `
      .card-container ::ng-deep p {
        margin: 0;
      }
      .card-container ::ng-deep > .ant-tabs-card .ant-tabs-content {
        height: 120px;
        margin-top: -16px;
      }
      .card-container ::ng-deep > .ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane {
        background: #fff;
        padding: 16px;
      }
      .card-container ::ng-deep > .ant-tabs-card > .ant-tabs-nav::before {
        display: none;
      }
      .card-container ::ng-deep > .ant-tabs-card .ant-tabs-tab {
        border-color: #dfc57b;
        background: #dfc57b;
      }
      .card-container ::ng-deep > .ant-tabs-card .ant-tabs-tab-active {
        border-color: #fff;
        background: #fff;
      }
    `,
  ],
})
export class AboutComponent {}
