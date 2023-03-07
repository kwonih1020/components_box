# 아토믹 디자인

## Atom

더이상 분해할 수 없는 기본 컴포넌트를 의미. (ex: Label, Input, Button)과 같이 기본 HTML Element 태그 혹은 글꼴, 애니메이션, 컬러 팔레트, 레이아웃과 같이 추상적인 요소도 포함

## Molecule

Molecule는 여러 개의 atom을 결합하여 자신의 고유한 특성을 가짐.
예를 들어서, Input & Button 을 결합하여 Form을 molecule로 정의 할 수 있음.

## Organism

Organism은 앞 단계보다 좀 더 복잡하고 서비스에서 표현될 수 있는 명확한 영역과 특정 컨텍스트를 가집니다. 이것은 atom, molecule, organism으로 구성할 수 있습니다. 예를 들어 header 라는 컨텍스트에 logo(atom), navigation(molecule), search form(molecule)을 포함할 수 있습니다. atom, molecule에 비해 좀 더 구체적으로 표현되고 컨텍스트를 가지기 때문에 상대적으로 재사용성이 낮아지는 특성을 가집니다.

## Template

Template은 page를 만들 수 있도록 여러 개의 organism, molecule로 구성할 수 있습니다. 실제 컴포넌트를 레이아웃에 배치하고 구조를 잡는 와이어 프레임입니다. 즉, 실제 콘텐츠가 없는 page 수준의 스켈레톤이라고 정의할 수 있습니다.

## Page

Page는 유저가 볼 수 있는 실제 콘텐츠를 담고 있습니다. template의 인스턴스라고 할 수 있습니다. 예를 들어 장바구니 페이지에 유저가 담은 상품이 없거나 10개를 담는 다양한 template의 인스턴스를 볼 수 있습니다.

### Molecule과 Organism 을 나누는 기준의 주관성

Molecule은 Atom으로 구성되어 SRP에 따라 1가지 책임을 지고, organism은 atom, molecule, organism으로 구성되어 서비스에서 Layout을 기준으로 나눌 수 있는 영역을 갖습니다.

작성한 컴포넌트에 컨텍스트가 있는 경우에는 organism으로, 컨텍스트 없이 UI 적인 요소로 SRP를 지킬 수 있다면 재사용하기 쉬운 molecule로 작성합니다. 그래서 molecule의 컴포넌트 네이밍은 컨텍스트 없이 주로 UI 적인 네이밍이 포함됩니다. 반면에 organism 네이밍은 컨텍스트가 포함됩니다.
