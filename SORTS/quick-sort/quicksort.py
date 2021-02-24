        if (!headerPresent) {
          res.append($('<h1/>', {
            text: legend
          }));
          headerPresent = true;
        }
        var t = mkTable(d.sql[i]);
        t.addClass('sqlmine')
          .appendTo(res);
        if (d.answer && d.answer.length > 0  && d.answer[0].rows && (d.score || 0) < 100) {
          res.append($('<div/>', {
              text: 'Show what the answer should be...',
              'class': 'showtxt'
            })
            .click(function () {
              $(this).next().show('slow');
            })
          );
          var a = mkTable(d.answer[0]);
          a.addClass('sqlans');
          a.appendTo(res);
        }
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      qu.find('.res').empty().removeClass('waiting')
        .append($('<h1/>', {
          'class': 'syserr',
          text: 'SQLZOO system error:'
        }))
        .append($('<div/>', {
          text: textStatus
        }))
        .append($('<div/>', {
          text: errorThrown
        }))
        .append($('<div/>').html(jqXHR.responseText))
    }