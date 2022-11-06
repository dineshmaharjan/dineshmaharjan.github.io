import 'package:flutter/material.dart';

class CollapsingAppBarWeb extends StatelessWidget {
  const CollapsingAppBarWeb({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          const SliverAppBar(
            title: Text('Collapsing Appbar'),
            floating: true,
            flexibleSpace: FlexibleSpaceBar(
              title: Text('Appbar'),
            ),
            expandedHeight: 200,
          ),
          SliverList(
            delegate: SliverChildBuilderDelegate(
              (context, index) {
                return  ListTile(title: Text('Item : $index'),);
              },
              childCount: 100
            ),
          ),
        ],
      ),
    );
  }
}
