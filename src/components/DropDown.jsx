import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import Link from 'next/link';
const items = [
  {
    key: '1',
    label: (
        <Link href={'/CPU'}>
        CPU / Processor
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link href={'/Monitor'}>
        Monitor
      </Link>
    ),
  },
  {
    key: '3',
    label: (
        <Link href={'/Motherboard'}>
        Motherboard
      </Link>
    ),
  },
  {
    key: '4',
    label: (
        <Link href={'/RAM'}>
        RAM
      </Link>
    ),
  },
  {
    key: '5',
    label: (
        <Link href={'/PSU'}>
        Power Supply Unit
      </Link>
    ),
  },
  {
    key: '6',
    label: (
        <Link href={'/StorageDevice'}>
    Storage Device
      </Link>
    ),
  },
];
const DropDown = () => (
    <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        
      >
        <Button 
      style={{  backgroundColor:' #001529',color:'#69b1ff'}}
        
        >Components</Button>
      </Dropdown>
      {/* <Dropdown
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
      >
        <Button>bottomRight</Button>
      </Dropdown> */}
    {/* <Space wrap>
      <Dropdown
        menu={{
          items,
        }}
        placement="topLeft"
      >
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="top"
      >
        <Button>top</Button>
      </Dropdown>
      <Dropdown
        menu={{
          items,
        }}
        placement="topRight"
      >
        <Button>topRight</Button>
      </Dropdown>
    </Space> */}
  </Space>
);
export default DropDown;