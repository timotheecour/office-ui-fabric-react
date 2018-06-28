import * as React from 'react';
import { DashboardGridLayout } from '../DashboardGridLayout';
import { DashboardGridBreakpointLayouts, Size } from '../DashboardGridLayout.types';
import { CardSize, Priority, CardContentType } from '@uifabric/experiments/src/components/Card/Card.types';
import { Card } from '@uifabric/experiments/src/components/Card';
import { IThumbnailItemProps } from '@uifabric/experiments/src/components/Card/ThumbnailList/ThumbnailList.types';
import { IAction } from '@uifabric/experiments/src/components/Card/ActionBar/ActionBar.types';

export class DashboardGridLayoutCardExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const cardFrameContent = {
      cardTitle: 'Example Card',
      cardDropDownOptions: [
        {
          key: 'Remove',
          name: 'Remove',
          icon: 'PageRemove',
          ariaLabel: 'Remove card',
          title: 'Remove card',
          onClick: () => {
            alert('Remove clicked');
          }
        }
      ]
    };
    const thumbnailItems: IThumbnailItemProps[] = [
      {
        imageSource: './src/images/download.jpg',
        subheaderText: 'First item',
        description: 'This is the first thumbnail item',
        handleThumbnailItemClick: () => {
          alert('First Item clicked');
        }
      },
      {
        imageSource: './src/images/download.jpg',
        subheaderText: 'Second item',
        description: 'Lorem ipsum dolor sit amet, ',
        handleThumbnailItemClick: () => {
          alert('Second Item clicked');
        }
      }
    ];

    const actions: IAction[] = [
      {
        title: 'Action 1',
        action: () => {
          alert('Action1 clicked');
        }
      },
      {
        title: 'Action 2',
        action: () => {
          alert('Action2 clicked');
        }
      },
      {
        title: 'Action 3',
        action: () => {
          alert('Action3 clicked');
        }
      },
      {
        title: 'Action 4',
        action: () => {
          alert('Action4 clicked');
        }
      },
      {
        title: 'Action 5',
        action: () => {
          alert('Action5 clicked');
        }
      },
      {
        title: 'Action 6',
        action: () => {
          alert('Action6 clicked');
        }
      },
      {
        title: 'Action 7',
        action: () => {
          alert('Action7 clicked');
        }
      },
      {
        title: 'Action 8',
        action: () => {
          alert('Action8 clicked');
        }
      },
      {
        title: 'Action 9',
        action: () => {
          alert('Action9 clicked');
        }
      }
    ];

    const contentAreaList = [
      {
        priority: Priority.Priority1,
        cardContentType: CardContentType.BodyText,
        content: {
          subHeaderText: 'Subheader Text',
          bodyText: 'Body Text'
        }
      },
      {
        priority: Priority.Priority2,
        cardContentType: CardContentType.ThumbnailList,
        content: {
          thumbnailItems: thumbnailItems
        }
      }
    ];

    const header = {
      headerText: 'Header Text ',
      annotationText: 'Annotation Text '
    };
    return (
      <DashboardGridLayout isDraggable={true} layout={this._generateLayout()}>
        <div key="0">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={contentAreaList}
            cardSize={CardSize.small}
          />
        </div>
        <div key="1">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={contentAreaList}
            cardSize={CardSize.mediumTall}
          />
        </div>
        <div key="2">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={contentAreaList}
            cardSize={CardSize.small}
          />
        </div>
        <div key="3">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={contentAreaList}
            cardSize={CardSize.mediumWide}
            actions={actions}
          />
        </div>
        <div key="4">
          <Card
            cardFrameContent={cardFrameContent}
            header={header}
            cardContentList={contentAreaList}
            cardSize={CardSize.large}
            actions={actions}
          />
        </div>
      </DashboardGridLayout>
    );
  }

  private _generateLayout(): DashboardGridBreakpointLayouts {
    return {
      lg: [
        { i: '0', y: 0, x: 0, size: Size.small },
        { i: '1', y: 0, x: 1, size: Size.mediumTall },
        { i: '2', y: 1, x: 0, size: Size.small },
        { i: '3', y: 0, x: 2, size: Size.mediumWide },
        { i: '4', y: 1, x: 2, size: Size.large }
      ]
    };
  }
}
